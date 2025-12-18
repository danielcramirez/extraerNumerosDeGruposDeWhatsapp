/**
 * Extractor de Números Telefónicos Colombianos
 * Script para consola del navegador que identifica, clasifica y exporta
 * números telefónicos colombianos con soporte para todos los operadores móviles (300-399)
 * 
 * Uso: Copiar y pegar este script en la consola del navegador en cualquier página web
 */

(function() {
    'use strict';

    // Configuración de operadores móviles colombianos (300-399)
    // Nota: Debido a la portabilidad numérica, estos prefijos indican el operador original de asignación
    const OPERADORES = {
        // Claro (310-329)
        310: 'Claro', 311: 'Claro', 312: 'Claro', 313: 'Claro',
        314: 'Claro', 315: 'Claro', 316: 'Claro', 317: 'Claro', 318: 'Claro',
        319: 'Claro', 320: 'Claro', 321: 'Claro', 322: 'Claro', 323: 'Claro',
        326: 'Claro', 327: 'Claro', 328: 'Claro', 329: 'Claro',
        
        // Tigo/Colombia Móvil (300-309)
        300: 'Tigo', 301: 'Tigo', 302: 'Tigo', 303: 'Tigo', 304: 'Tigo',
        305: 'Tigo', 306: 'Tigo', 307: 'Tigo', 308: 'Tigo', 309: 'Tigo',
        
        // Movistar (350-359)
        350: 'Movistar', 351: 'Movistar', 352: 'Movistar', 353: 'Movistar',
        354: 'Movistar', 355: 'Movistar', 356: 'Movistar', 357: 'Movistar',
        358: 'Movistar', 359: 'Movistar',
        
        // Avantel (330-333)
        330: 'Avantel', 331: 'Avantel', 332: 'Avantel', 333: 'Avantel',
        
        // ETB (340-343, 325)
        325: 'ETB', 340: 'ETB', 341: 'ETB', 342: 'ETB', 343: 'ETB',
        
        // Virgin Mobile (344-349)
        344: 'Virgin Mobile', 345: 'Virgin Mobile', 346: 'Virgin Mobile',
        347: 'Virgin Mobile', 348: 'Virgin Mobile', 349: 'Virgin Mobile',
        
        // WOM (360-369)
        360: 'WOM', 361: 'WOM', 362: 'WOM', 363: 'WOM', 364: 'WOM',
        365: 'WOM', 366: 'WOM', 367: 'WOM', 368: 'WOM', 369: 'WOM',
        
        // Flash Mobile (334-339)
        334: 'Flash Mobile', 335: 'Flash Mobile', 336: 'Flash Mobile',
        337: 'Flash Mobile', 338: 'Flash Mobile', 339: 'Flash Mobile',
        
        // Uff Móvil (324)
        324: 'Uff Móvil'
    };

    // Nota: Los números móviles en Colombia no tienen códigos de área geográficos
    // La clasificación se hace por operador

    // Clase principal del extractor
    class ExtractorNumerosCol {
        constructor() {
            this.numeros = new Set();
            this.numerosClasificados = [];
            this.ui = null;
        }

        /**
         * Extrae números de teléfono del texto de la página
         */
        extraerNumerosDePagina() {
            const bodyText = document.body.innerText;
            const htmlContent = document.body.innerHTML;
            
            // Patrones para detectar números colombianos
            // Formato: +57 3XX XXX XXXX, 3XX XXX XXXX, 3XXXXXXXXX
            const patrones = [
                // Con código de país
                /\+57\s*3(\d{2})\s*(\d{3})\s*(\d{4})/g,
                /\+57\s*3(\d{9})/g,
                /57\s*3(\d{9})/g,
                
                // Sin código de país
                /\b3(\d{2})\s*(\d{3})\s*(\d{4})\b/g,
                /\b3(\d{9})\b/g,
                
                // Con guiones o puntos
                /\b3(\d{2})[-.](\d{3})[-.](\d{4})\b/g,
                
                // Con paréntesis
                /\(3(\d{2})\)\s*(\d{3})\s*(\d{4})/g
            ];

            // Extraer números usando todos los patrones
            patrones.forEach(patron => {
                let match;
                while ((match = patron.exec(bodyText)) !== null) {
                    this.procesarNumero(match);
                }
            });

            // Buscar también en atributos href y data
            const enlaces = document.querySelectorAll('a[href^="tel:"], a[href^="https://wa.me/"], a[href^="whatsapp://"]');
            enlaces.forEach(enlace => {
                const href = enlace.getAttribute('href');
                const numeroMatch = href.match(/\d{10,}/);
                if (numeroMatch) {
                    const numero = numeroMatch[0];
                    if (numero.length === 10 && numero.startsWith('3')) {
                        this.numeros.add(numero);
                    } else if (numero.length === 12 && numero.startsWith('57')) {
                        this.numeros.add(numero.substring(2));
                    }
                }
            });

            this.clasificarNumeros();
            console.log(`✅ Se encontraron ${this.numerosClasificados.length} números colombianos`);
            return this.numerosClasificados;
        }

        /**
         * Procesa un match de expresión regular
         */
        procesarNumero(match) {
            let numero = '';
            
            // Extraer dígitos del match
            if (match[0].includes('+57') || match[0].includes('57')) {
                // Con código de país
                numero = match[0].replace(/\D/g, '');
                if (numero.startsWith('57')) {
                    numero = numero.substring(2);
                }
            } else {
                // Sin código de país
                numero = match[0].replace(/\D/g, '');
            }

            // Validar que sea un número móvil colombiano (3XX XXX XXXX)
            if (numero.length === 10 && numero.startsWith('3')) {
                const prefijo = parseInt(numero.substring(0, 3));
                if (prefijo >= 300 && prefijo <= 399) {
                    this.numeros.add(numero);
                }
            }
        }

        /**
         * Clasifica los números extraídos
         */
        clasificarNumeros() {
            this.numerosClasificados = Array.from(this.numeros).map(numero => {
                const prefijo = parseInt(numero.substring(0, 3));
                const operador = OPERADORES[prefijo] || 'Desconocido';
                
                return {
                    numero: numero,
                    numeroFormateado: this.formatearNumero(numero),
                    prefijo: prefijo,
                    operador: operador,
                    region: this.determinarRegion(prefijo)
                };
            }).sort((a, b) => {
                // Ordenar por operador y luego por número
                if (a.operador !== b.operador) {
                    return a.operador.localeCompare(b.operador);
                }
                return a.numero.localeCompare(b.numero);
            });
        }

        /**
         * Formatea un número para visualización
         */
        formatearNumero(numero) {
            return `+57 ${numero.substring(0, 3)} ${numero.substring(3, 6)} ${numero.substring(6)}`;
        }

        /**
         * Determina la región basada en el prefijo
         * Los números móviles en Colombia son nacionales, no tienen región geográfica
         */
        determinarRegion(prefijo) {
            // Clasificación por rangos de operadores
            if (prefijo >= 300 && prefijo <= 309) {
                return 'Colombia - Cobertura Nacional';
            } else if (prefijo >= 310 && prefijo <= 329) {
                return 'Colombia - Cobertura Nacional';
            } else if (prefijo >= 330 && prefijo <= 349) {
                return 'Colombia - Cobertura Nacional';
            } else if (prefijo >= 350 && prefijo <= 359) {
                return 'Colombia - Cobertura Nacional';
            } else if (prefijo >= 360 && prefijo <= 369) {
                return 'Colombia - Cobertura Nacional';
            } else if (prefijo >= 370 && prefijo <= 399) {
                return 'Colombia - Cobertura Nacional';
            } else {
                return 'Colombia - Cobertura Nacional';
            }
        }

        /**
         * Crea la interfaz de usuario
         */
        crearUI() {
            // Eliminar UI existente si la hay
            if (this.ui) {
                this.ui.remove();
            }

            // Crear contenedor principal
            const container = document.createElement('div');
            container.id = 'extractor-numeros-ui';
            container.style.cssText = `
                position: fixed;
                top: 20px;
                right: 20px;
                width: 450px;
                max-height: 80vh;
                background: white;
                border: 2px solid #25D366;
                border-radius: 10px;
                box-shadow: 0 4px 20px rgba(0,0,0,0.3);
                z-index: 999999;
                font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif;
                overflow: hidden;
                display: flex;
                flex-direction: column;
            `;

            // Encabezado
            const header = document.createElement('div');
            header.style.cssText = `
                background: linear-gradient(135deg, #25D366 0%, #128C7E 100%);
                color: white;
                padding: 15px;
                font-weight: bold;
                font-size: 16px;
                display: flex;
                justify-content: space-between;
                align-items: center;
            `;
            header.innerHTML = `
                <span>📱 Números Encontrados: ${this.numerosClasificados.length}</span>
                <button id="close-extractor" style="
                    background: rgba(255,255,255,0.2);
                    border: none;
                    color: white;
                    width: 30px;
                    height: 30px;
                    border-radius: 50%;
                    cursor: pointer;
                    font-size: 18px;
                    font-weight: bold;
                ">×</button>
            `;

            // Botones de acción
            const actions = document.createElement('div');
            actions.style.cssText = `
                padding: 10px 15px;
                background: #f5f5f5;
                display: flex;
                gap: 10px;
                border-bottom: 1px solid #ddd;
            `;
            actions.innerHTML = `
                <button id="export-csv" style="
                    flex: 1;
                    padding: 8px 12px;
                    background: #25D366;
                    color: white;
                    border: none;
                    border-radius: 5px;
                    cursor: pointer;
                    font-weight: bold;
                    font-size: 13px;
                ">💾 Exportar CSV</button>
                <button id="copiar-todos" style="
                    flex: 1;
                    padding: 8px 12px;
                    background: #128C7E;
                    color: white;
                    border: none;
                    border-radius: 5px;
                    cursor: pointer;
                    font-weight: bold;
                    font-size: 13px;
                ">📋 Copiar Todos</button>
            `;

            // Lista de números
            const lista = document.createElement('div');
            lista.style.cssText = `
                flex: 1;
                overflow-y: auto;
                padding: 10px;
            `;

            if (this.numerosClasificados.length === 0) {
                lista.innerHTML = `
                    <div style="text-align: center; padding: 40px 20px; color: #666;">
                        <div style="font-size: 48px; margin-bottom: 10px;">🔍</div>
                        <p>No se encontraron números colombianos en esta página.</p>
                        <p style="font-size: 12px; margin-top: 10px;">
                            El script busca números móviles con prefijos 300-399.
                        </p>
                    </div>
                `;
            } else {
                this.numerosClasificados.forEach(dato => {
                    const item = document.createElement('div');
                    item.style.cssText = `
                        background: white;
                        border: 1px solid #e0e0e0;
                        border-radius: 8px;
                        padding: 12px;
                        margin-bottom: 8px;
                        transition: all 0.2s;
                    `;
                    item.onmouseenter = () => item.style.boxShadow = '0 2px 8px rgba(0,0,0,0.1)';
                    item.onmouseleave = () => item.style.boxShadow = 'none';

                    item.innerHTML = `
                        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
                            <div style="font-weight: bold; color: #128C7E; font-size: 16px;">
                                ${dato.numeroFormateado}
                            </div>
                            <div style="font-size: 11px; background: #e3f2fd; padding: 3px 8px; border-radius: 10px; color: #1976d2;">
                                ${dato.operador}
                            </div>
                        </div>
                        <div style="font-size: 11px; color: #666; margin-bottom: 8px;">
                            ${dato.region}
                        </div>
                        <div style="display: flex; gap: 5px;">
                            <button class="btn-llamar" data-numero="${dato.numero}" style="
                                flex: 1;
                                padding: 6px 10px;
                                background: #2196F3;
                                color: white;
                                border: none;
                                border-radius: 4px;
                                cursor: pointer;
                                font-size: 12px;
                                font-weight: bold;
                            ">📞 Llamar</button>
                            <button class="btn-whatsapp" data-numero="${dato.numero}" style="
                                flex: 1;
                                padding: 6px 10px;
                                background: #25D366;
                                color: white;
                                border: none;
                                border-radius: 4px;
                                cursor: pointer;
                                font-size: 12px;
                                font-weight: bold;
                            ">💬 WhatsApp</button>
                            <button class="btn-copiar" data-numero="${dato.numeroFormateado}" style="
                                padding: 6px 10px;
                                background: #607D8B;
                                color: white;
                                border: none;
                                border-radius: 4px;
                                cursor: pointer;
                                font-size: 12px;
                            ">📋</button>
                        </div>
                    `;
                    lista.appendChild(item);
                });
            }

            // Ensamblar UI
            container.appendChild(header);
            container.appendChild(actions);
            container.appendChild(lista);
            document.body.appendChild(container);

            this.ui = container;
            this.configurarEventos();
        }

        /**
         * Configura los eventos de la UI
         */
        configurarEventos() {
            // Botón cerrar
            document.getElementById('close-extractor').addEventListener('click', () => {
                this.ui.remove();
            });

            // Botón exportar CSV
            document.getElementById('export-csv').addEventListener('click', () => {
                this.exportarCSV();
            });

            // Botón copiar todos
            document.getElementById('copiar-todos').addEventListener('click', () => {
                this.copiarTodos();
            });

            // Botones de llamar
            document.querySelectorAll('.btn-llamar').forEach(btn => {
                btn.addEventListener('click', (e) => {
                    const numero = e.target.getAttribute('data-numero');
                    window.open(`tel:+57${numero}`, '_self');
                });
            });

            // Botones de WhatsApp
            document.querySelectorAll('.btn-whatsapp').forEach(btn => {
                btn.addEventListener('click', (e) => {
                    const numero = e.target.getAttribute('data-numero');
                    window.open(`https://wa.me/57${numero}`, '_blank');
                });
            });

            // Botones de copiar individual
            document.querySelectorAll('.btn-copiar').forEach(btn => {
                btn.addEventListener('click', (e) => {
                    const numero = e.target.getAttribute('data-numero');
                    this.copiarAlPortapapeles(numero);
                    e.target.textContent = '✓';
                    setTimeout(() => {
                        e.target.textContent = '📋';
                    }, 1000);
                });
            });
        }

        /**
         * Exporta los números a un archivo CSV con codificación UTF-8
         */
        exportarCSV() {
            // Crear contenido CSV con BOM para UTF-8
            const BOM = '\uFEFF';
            let csv = BOM + 'Número,Formato Internacional,Prefijo,Operador,Región\n';
            
            this.numerosClasificados.forEach(dato => {
                csv += `${dato.numero},"${dato.numeroFormateado}",${dato.prefijo},"${dato.operador}","${dato.region}"\n`;
            });

            // Crear blob con tipo MIME correcto para UTF-8
            const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
            const url = URL.createObjectURL(blob);
            
            // Crear enlace de descarga
            const link = document.createElement('a');
            link.setAttribute('href', url);
            link.setAttribute('download', `numeros_colombianos_${this.obtenerFechaHora()}.csv`);
            link.style.display = 'none';
            
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            
            console.log('✅ Archivo CSV exportado exitosamente');
        }

        /**
         * Copia todos los números al portapapeles
         */
        copiarTodos() {
            const texto = this.numerosClasificados
                .map(dato => dato.numeroFormateado)
                .join('\n');
            
            this.copiarAlPortapapeles(texto);
            
            const btn = document.getElementById('copiar-todos');
            const textoOriginal = btn.textContent;
            btn.textContent = '✓ Copiado';
            setTimeout(() => {
                btn.textContent = textoOriginal;
            }, 2000);
        }

        /**
         * Copia texto al portapapeles
         */
        copiarAlPortapapeles(texto) {
            if (navigator.clipboard && navigator.clipboard.writeText) {
                navigator.clipboard.writeText(texto).then(() => {
                    console.log('✅ Copiado al portapapeles');
                }).catch(err => {
                    console.error('❌ Error al copiar:', err);
                    this.copiarAlPortapapelesFallback(texto);
                });
            } else {
                this.copiarAlPortapapelesFallback(texto);
            }
        }

        /**
         * Método alternativo para copiar al portapapeles
         */
        copiarAlPortapapelesFallback(texto) {
            const textarea = document.createElement('textarea');
            textarea.value = texto;
            textarea.style.position = 'fixed';
            textarea.style.opacity = '0';
            document.body.appendChild(textarea);
            textarea.select();
            
            try {
                document.execCommand('copy');
                console.log('✅ Copiado al portapapeles (fallback)');
            } catch (err) {
                console.error('❌ Error al copiar:', err);
            }
            
            document.body.removeChild(textarea);
        }

        /**
         * Obtiene fecha y hora para nombres de archivo
         */
        obtenerFechaHora() {
            const ahora = new Date();
            return `${ahora.getFullYear()}${String(ahora.getMonth() + 1).padStart(2, '0')}${String(ahora.getDate()).padStart(2, '0')}_${String(ahora.getHours()).padStart(2, '0')}${String(ahora.getMinutes()).padStart(2, '0')}`;
        }

        /**
         * Ejecuta el extractor completo
         */
        ejecutar() {
            console.log('🚀 Iniciando extractor de números colombianos...');
            this.extraerNumerosDePagina();
            this.crearUI();
            
            // Mostrar resumen en consola
            if (this.numerosClasificados.length > 0) {
                console.table(this.numerosClasificados);
                
                // Estadísticas por operador
                const estadisticas = {};
                this.numerosClasificados.forEach(dato => {
                    estadisticas[dato.operador] = (estadisticas[dato.operador] || 0) + 1;
                });
                console.log('📊 Estadísticas por operador:');
                console.table(estadisticas);
            }
        }
    }

    // Crear instancia y ejecutar
    const extractor = new ExtractorNumerosCol();
    extractor.ejecutar();

    // Exponer para uso en consola
    window.extractorNumerosCol = extractor;

    console.log('💡 Tip: Puedes acceder al extractor con window.extractorNumerosCol');
})();
