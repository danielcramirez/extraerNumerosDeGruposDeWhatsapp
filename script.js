(function() {
  // Patrones específicos para números de Colombia
  const phonePatterns = [
    // Móviles: +57 3XX XXX XXXX o 57 3XX XXX XXXX
    /(\+57\s?)?3\d{2}[\s.-]?\d{3}[\s.-]?\d{4}/g,
    
    // Móviles sin código país: 3XX XXX XXXX
    /3\d{2}[\s.-]?\d{3}[\s.-]?\d{4}/g,
    
    // Fijos: +57 1XX XXX XXXX o 57 1XX XXX XXXX (Bogotá)
    /(\+57\s?)?1\d{2}[\s.-]?\d{3}[\s.-]?\d{4}/g,
    
    // Fijos sin código país: 1XX XXX XXXX
    /1\d{2}[\s.-]?\d{3}[\s.-]?\d{4}/g,
    
    // Fijos regionales: +57 4XX XXX XXXX o 57 4XX XXX XXXX (Medellín), 5XX (Cali), etc.
    /(\+57\s?)?[2-8]\d{1}[\s.-]?\d{3}[\s.-]?\d{4}/g,
    
    // Formato con paréntesis: (57) 3XX XXX XXXX
    /\(57\)\s?[13]\d{2}[\s.-]?\d{3}[\s.-]?\d{4}/g,
    
    // Formato común colombiano: 3XX-XXX-XXXX o 1XX-XXX-XXXX
    /[13]\d{2}[-]\d{3}[-]\d{4}/g,
    
    // 10 dígitos seguidos (puede ser móvil o fijo)
    /[13]\d{9}/g,
    
    // TODOS los celulares colombianos: 300-399
    /3\d{2}\d{7}/g,
    
    // Con extensión
    /(\+57\s?)?[13]\d{2}[\s.-]?\d{3}[\s.-]?\d{4}\s?(?:ext\.?|extensi[óo]n|ex|#)\s?\d+/gi
  ];

  // Códigos de área principales de Colombia
  const codigosArea = {
    '1': 'Bogotá D.C.',
    '2': 'Pasto / Popayán',
    '4': 'Medellín',
    '5': 'Cali',
    '6': 'Pereira / Armenia',
    '7': 'Bucaramanga / Cúcuta',
    '8': 'Barranquilla / Cartagena'
  };

  // TODOS los operadores móviles de Colombia (rango 300-399)
  const operadoresMoviles = {
    // Claro (Comcel)
    '310': 'Claro', '311': 'Claro', '312': 'Claro', '313': 'Claro',
    '314': 'Claro', '315': 'Claro', '316': 'Claro', '317': 'Claro',
    '318': 'Claro', '319': 'Claro', '320': 'Claro', '321': 'Claro',
    '322': 'Claro', '323': 'Claro',
    
    // Movistar
    '300': 'Movistar', '301': 'Movistar', '302': 'Movistar', 
    '303': 'Movistar', '304': 'Movistar', '305': 'Movistar',
    '306': 'Movistar', '307': 'Movistar', '308': 'Movistar',
    '309': 'Movistar',
    
    // Tigo (antes Colombia Móvil)
    '330': 'Tigo', '331': 'Tigo', '332': 'Tigo', '333': 'Tigo',
    '334': 'Tigo', '335': 'Tigo', '336': 'Tigo', '337': 'Tigo',
    '338': 'Tigo', '339': 'Tigo',
    
    // WOM
    '350': 'WOM', '351': 'WOM', '352': 'WOM', '353': 'WOM',
    '354': 'WOM', '355': 'WOM', '356': 'WOM', '357': 'WOM',
    '358': 'WOM', '359': 'WOM',
    
    // Avantel
    '360': 'Avantel', '361': 'Avantel', '362': 'Avantel',
    '363': 'Avantel', '364': 'Avantel', '365': 'Avantel',
    '366': 'Avantel', '367': 'Avantel', '368': 'Avantel',
    '369': 'Avantel',
    
    // ETB
    '370': 'ETB', '371': 'ETB', '372': 'ETB', '373': 'ETB',
    '374': 'ETB', '375': 'ETB', '376': 'ETB', '377': 'ETB',
    '378': 'ETB', '379': 'ETB',
    
    // Virgin Mobile
    '380': 'Virgin Mobile', '381': 'Virgin Mobile', '382': 'Virgin Mobile',
    '383': 'Virgin Mobile', '384': 'Virgin Mobile', '385': 'Virgin Mobile',
    '386': 'Virgin Mobile', '387': 'Virgin Mobile', '388': 'Virgin Mobile',
    '389': 'Virgin Mobile',
    
    // Otros operadores
    '390': 'Partners Telecom', '391': 'Partners Telecom', '392': 'Partners Telecom',
    '393': 'Partners Telecom', '394': 'Partners Telecom', '395': 'Partners Telecom',
    '396': 'Partners Telecom', '397': 'Partners Telecom', '398': 'Partners Telecom',
    '399': 'Partners Telecom'
  };

  // Función para detectar operadores basado en rangos
  function detectarOperador(primerosTres) {
    const codigo = parseInt(primerosTres);
    
    // Claro: 310-323
    if (codigo >= 310 && codigo <= 323) return 'Claro';
    
    // Movistar: 300-309
    if (codigo >= 300 && codigo <= 309) return 'Movistar';
    
    // Tigo: 330-339
    if (codigo >= 330 && codigo <= 339) return 'Tigo';
    
    // WOM: 350-359
    if (codigo >= 350 && codigo <= 359) return 'WOM';
    
    // Avantel: 360-369
    if (codigo >= 360 && codigo <= 369) return 'Avantel';
    
    // ETB: 370-379
    if (codigo >= 370 && codigo <= 379) return 'ETB';
    
    // Virgin Mobile: 380-389
    if (codigo >= 380 && codigo <= 389) return 'Virgin Mobile';
    
    // Partners: 390-399
    if (codigo >= 390 && codigo <= 399) return 'Partners Telecom';
    
    return 'Desconocido';
  }

  // Obtener todo el texto de la página
  const pageText = document.body.innerText || document.body.textContent;
  
  // Encontrar todos los números
  const foundNumbers = new Set();
  
  phonePatterns.forEach(pattern => {
    const matches = pageText.match(pattern);
    if (matches) {
      matches.forEach(match => {
        const cleanMatch = match.trim();
        const digits = cleanMatch.replace(/\D/g, '');
        
        // Validar que sea un número colombiano válido
        if (digits.length === 10 || (digits.length === 12 && digits.startsWith('57'))) {
          foundNumbers.add(cleanMatch);
        } else if (digits.length === 12 && !digits.startsWith('57')) {
          foundNumbers.add(cleanMatch);
        }
      });
    }
  });

  // Filtrar falsos positivos
  const filteredNumbers = Array.from(foundNumbers).filter(number => {
    const falsePositives = [
      /^\d{5}$/, // Códigos postales
      /^\d{1,2}[-\/]\d{1,2}[-\/]\d{4}$/, // Fechas
      /^\d+\.\d+$/, // Decimales
      /^\d{1,3}(,\d{3})*$/, // Números con comas
      /^\d{6}$/, // Códigos cortos
      /^\d{8}$/, // Algunos documentos
    ];
    
    return !falsePositives.some(pattern => pattern.test(number.replace(/\D/g, '')));
  });

  // Función para identificar tipo de número
  function identificarNumero(numero) {
    const digits = numero.replace(/\D/g, '');
    let tipo = 'Desconocido';
    let ciudad = '';
    let operador = '';
    
    // Eliminar código de país si existe
    let numLocal = digits;
    if (digits.length === 12 && digits.startsWith('57')) {
      numLocal = digits.substring(2);
    } else if (digits.length === 11 && digits.startsWith('57')) {
      numLocal = digits.substring(2);
    }
    
    if (numLocal.length === 10) {
      const primerDigito = numLocal.charAt(0);
      const primerosTres = numLocal.substring(0, 3);
      
      if (primerDigito === '3') {
        tipo = 'Móvil';
        operador = detectarOperador(primerosTres);
      } else if (primerDigito === '1') {
        tipo = 'Fijo (Bogotá)';
        ciudad = 'Bogotá D.C.';
        operador = 'Teléfono Fijo';
      } else if (primerDigito >= '2' && primerDigito <= '8') {
        tipo = 'Fijo Regional';
        ciudad = codigosArea[primerDigito] || `Región ${primerDigito}`;
        operador = 'Teléfono Fijo';
      }
    } else if (numLocal.length === 7) {
      tipo = 'Fijo Corto';
      ciudad = 'Bogotá D.C.';
      operador = 'Teléfono Fijo';
    }
    
    return { tipo, ciudad, operador };
  }

  // Función para generar CSV con codificación UTF-8 para español
  function generarCSV() {
    const datos = [];
    
    // Encabezados en español con caracteres especiales
    const encabezados = [
      'Número', 
      'Formato Original', 
      'Tipo', 
      'Ciudad/Región', 
      'Operador', 
      'Teléfono Limpio', 
      'Enlace Llamada', 
      'Enlace WhatsApp',
      'Fecha Extracción',
      'Página Origen'
    ];
    
    datos.push(encabezados);
    
    // Obtener información de la página
    const fechaActual = new Date().toLocaleString('es-CO', {
      timeZone: 'America/Bogota',
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    });
    
    const tituloPagina = document.title || 'Sin título';
    const urlPagina = window.location.href;
    
    // Datos de cada número
    filteredNumbers.forEach((number, index) => {
      const info = identificarNumero(number);
      const cleanNumber = number.replace(/[^\d+]/g, '');
      const isMobile = info.tipo === 'Móvil';
      const whatsappNum = cleanNumber.replace(/\D/g, '').replace(/^57/, '');
      const whatsappLink = (isMobile && whatsappNum.length === 10) ? `https://wa.me/57${whatsappNum}` : 'No disponible';
      
      // Función para escapar correctamente valores CSV
      const escaparCSV = (valor) => {
        if (valor === null || valor === undefined) return '""';
        const valorStr = String(valor);
        // Si contiene comillas, comas o saltos de línea, encerrar en comillas
        if (valorStr.includes('"') || valorStr.includes(',') || valorStr.includes('\n') || valorStr.includes('\r')) {
          // Escapar comillas dobles duplicándolas
          return `"${valorStr.replace(/"/g, '""')}"`;
        }
        return `"${valorStr}"`;
      };
      
      datos.push([
        index + 1,
        escaparCSV(number),
        escaparCSV(info.tipo),
        escaparCSV(info.ciudad),
        escaparCSV(info.operador),
        escaparCSV(cleanNumber),
        escaparCSV(`tel:${cleanNumber}`),
        escaparCSV(whatsappLink),
        escaparCSV(fechaActual),
        escaparCSV(urlPagina)
      ]);
    });
    
    // Agregar metadatos al final del CSV
    datos.push([]); // Línea vacía
    datos.push(['--- METADATOS DE EXTRACCIÓN ---']);
    datos.push(['Fecha y hora', fechaActual]);
    datos.push(['URL de origen', urlPagina]);
    datos.push(['Título página', tituloPagina]);
    datos.push(['Total números encontrados', filteredNumbers.length]);
    datos.push(['Móviles', filteredNumbers.filter(n => identificarNumero(n).tipo === 'Móvil').length]);
    datos.push(['Fijos', filteredNumbers.filter(n => identificarNumero(n).tipo.includes('Fijo')).length]);
    datos.push(['Generado con', 'Extractor Teléfonos Colombia v2.0']);
    
    // Convertir a texto CSV con BOM UTF-8
    const csvContent = datos.map(row => row.join(',')).join('\n');
    
    // Añadir BOM (Byte Order Mark) para asegurar UTF-8
    const BOM = '\uFEFF';
    const csvConBOM = BOM + csvContent;
    
    // Crear archivo con codificación UTF-8 explícita
    const blob = new Blob([csvConBOM], { 
      type: 'text/csv;charset=utf-8;'
    });
    
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);
    
    // Nombre de archivo con fecha y sin caracteres especiales
    const fechaArchivo = new Date().toISOString().split('T')[0];
    const nombrePagina = tituloPagina
      .substring(0, 50)
      .replace(/[^\w\sáéíóúÁÉÍÓÚñÑ]/gi, '')
      .replace(/\s+/g, '_');
    
    const filename = `teléfonos_colombia_${nombrePagina}_${fechaArchivo}.csv`;
    
    link.setAttribute('href', url);
    link.setAttribute('download', filename);
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    // Liberar memoria
    setTimeout(() => URL.revokeObjectURL(url), 100);
    
    console.log(`✅ CSV descargado: ${filename}`);
    console.log(`📊 Codificación: UTF-8 con BOM para español`);
    console.log(`📝 Caracteres especiales: Sí (áéíóú, ñ, Ñ, tildes)`);
    
    return filename;
  }

  // Mostrar resultados en la consola
  console.log('🔍 BÚSQUEDA DE NÚMEROS DE TELÉFONO - COLOMBIA 🇨🇴');
  console.log('='.repeat(60));
  console.log('📱 RANGOS DE OPERADORES EN COLOMBIA:');
  console.log('   • Movistar: 300-309');
  console.log('   • Claro: 310-323');
  console.log('   • Tigo: 330-339');
  console.log('   • WOM: 350-359');
  console.log('   • Avantel: 360-369');
  console.log('   • ETB: 370-379');
  console.log('   • Virgin Mobile: 380-389');
  console.log('   • Partners Telecom: 390-399');
  console.log('='.repeat(60));
  
  // Calcular estadísticas
  const estadisticas = {
    total: filteredNumbers.length,
    moviles: filteredNumbers.filter(n => identificarNumero(n).tipo === 'Móvil').length,
    fijos: filteredNumbers.filter(n => identificarNumero(n).tipo.includes('Fijo')).length,
    bogota: filteredNumbers.filter(n => identificarNumero(n).ciudad === 'Bogotá D.C.').length
  };
  
  // Calcular estadísticas de operadores
  const statsOperadores = {};
  filteredNumbers.forEach(number => {
    const info = identificarNumero(number);
    const operador = info.operador;
    if (operador) {
      statsOperadores[operador] = (statsOperadores[operador] || 0) + 1;
    }
  });
  
  if (filteredNumbers.length === 0) {
    console.log('❌ No se encontraron números de teléfono colombianos en la página.');
  } else {
    console.log(`✅ Se encontraron ${filteredNumbers.length} número(s) de teléfono colombiano(s):`);
    console.log('');
    
    // Mostrar estadísticas de operadores
    console.log('📊 DISTRIBUCIÓN POR OPERADOR:');
    Object.entries(statsOperadores).forEach(([op, count]) => {
      const barra = '█'.repeat(Math.ceil(count / Math.max(...Object.values(statsOperadores)) * 10));
      console.log(`   ${op.padEnd(15)}: ${count.toString().padStart(3)} ${barra}`);
    });
    console.log('');
    
    // Mostrar primeros 10 números en consola (para no saturar)
    const mostrarLimite = Math.min(filteredNumbers.length, 10);
    filteredNumbers.slice(0, mostrarLimite).forEach((number, index) => {
      const info = identificarNumero(number);
      const cleanNumber = number.replace(/[^\d+]/g, '');
      
      console.log(`📞 ${index + 1}. ${number}`);
      console.log(`   📋 Tipo: ${info.tipo}`);
      console.log(`   🏙️  Ciudad: ${info.ciudad || 'N/A'}`);
      console.log(`   📶 Operador: ${info.operador || 'N/A'}`);
      console.log(`   🔗 Llamar: tel:${cleanNumber}`);
      
      if (info.tipo === 'Móvil') {
        const whatsappNum = cleanNumber.replace(/\D/g, '').replace(/^57/, '');
        if (whatsappNum.length === 10) {
          console.log(`   💬 WhatsApp: https://wa.me/57${whatsappNum}`);
        }
      }
      
      console.log('');
    });
    
    if (filteredNumbers.length > 10) {
      console.log(`📝 ... y ${filteredNumbers.length - 10} número(s) más.`);
      console.log('   Ver todos en la ventana emergente o descarga el CSV.');
      console.log('');
    }
    
    // Crear una lista visual en la página
    if (filteredNumbers.length > 0) {
      const modal = document.createElement('div');
      modal.id = 'telefonos-colombia-modal';
      modal.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: white;
        border: 2px solid #FCD116;
        border-radius: 10px;
        padding: 20px;
        z-index: 999999;
        max-width: 650px;
        max-height: 85vh;
        overflow-y: auto;
        box-shadow: 0 4px 20px rgba(0,0,0,0.2);
        font-family: 'Segoe UI', Arial, sans-serif;
      `;
      
      // Primero agregar el modal vacío al DOM
      document.body.appendChild(modal);
      
      // Luego crear el contenido del modal
      let modalHTML = `
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 15px; background: linear-gradient(90deg, #003366, #FCD116, #CE1126); padding: 10px; border-radius: 5px;">
          <h3 style="margin: 0; color: white; display: flex; align-items: center; text-shadow: 1px 1px 2px rgba(0,0,0,0.5);">
            <span style="margin-right: 10px;">🇨🇴</span> Teléfonos Colombia - Extractor
          </h3>
          <button id="cerrar-modal-btn" style="background: white; color: #CE1126; border: none; border-radius: 5px; padding: 5px 10px; cursor: pointer; font-weight: bold;">X</button>
        </div>
        
        <div style="margin-bottom: 15px; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 10px; background: #f8f9fa; padding: 12px; border-radius: 5px;">
          <div style="font-size: 14px; color: #003366;">
            <span style="background: #003366; color: white; padding: 4px 10px; border-radius: 12px; font-weight: bold; margin-right: 8px;">${filteredNumbers.length}</span>
            <strong>números encontrados</strong>
          </div>
          <button id="descargar-csv-btn" style="background: linear-gradient(135deg, #28a745, #20c997); color: white; border: none; border-radius: 5px; padding: 10px 20px; cursor: pointer; display: flex; align-items: center; font-weight: bold; transition: all 0.3s; box-shadow: 0 2px 5px rgba(0,0,0,0.2);">
            <span style="margin-right: 8px;">📥</span> Descargar CSV (UTF-8)
          </button>
        </div>
        
        <div style="margin-bottom: 15px; background: white; padding: 12px; border-radius: 5px; border: 1px solid #ddd; border-left: 4px solid #28a745;">
          <div style="display: flex; align-items: center; margin-bottom: 8px;">
            <span style="background: #28a745; color: white; width: 24px; height: 24px; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-right: 10px; font-weight: bold;">i</span>
            <strong style="color: #003366;">Información del archivo CSV:</strong>
          </div>
          <div style="font-size: 12px; color: #666; line-height: 1.4;">
            • <strong>Codificación:</strong> UTF-8 con BOM (soporta áéíóú, ñ, Ñ, tildes)<br>
            • <strong>Columnas:</strong> 10 campos completos incluyendo metadatos<br>
            • <strong>Compatibilidad:</strong> Excel, Google Sheets, LibreOffice<br>
            • <strong>Metadatos:</strong> Incluye fecha, URL y estadísticas
          </div>
        </div>
        
        <div style="max-height: 350px; overflow-y: auto; border: 1px solid #ddd; border-radius: 5px; padding: 10px; margin-bottom: 15px; background: white;">
          <table style="width: 100%; border-collapse: collapse; font-size: 13px;">
            <thead>
              <tr style="background: #f8f9fa; position: sticky; top: 0; z-index: 10;">
                <th style="padding: 10px; text-align: left; border-bottom: 2px solid #ddd; width: 40px; color: #003366;">#</th>
                <th style="padding: 10px; text-align: left; border-bottom: 2px solid #ddd; color: #003366;">Número</th>
                <th style="padding: 10px; text-align: left; border-bottom: 2px solid #ddd; width: 90px; color: #003366;">Tipo</th>
                <th style="padding: 10px; text-align: left; border-bottom: 2px solid #ddd; width: 100px; color: #003366;">Operador</th>
                <th style="padding: 10px; text-align: left; border-bottom: 2px solid #ddd; width: 120px; color: #003366;">Acciones</th>
              </tr>
            </thead>
            <tbody>
      `;
      
      // Agregar filas de números
      filteredNumbers.forEach((num, i) => {
        const info = identificarNumero(num);
        const cleanNum = num.replace(/[^\d+]/g, '');
        const whatsappNum = cleanNum.replace(/\D/g, '').replace(/^57/, '');
        const isMobile = info.tipo === 'Móvil';
        
        // Color según operador
        let colorOperador = '#6c757d';
        if (info.operador.includes('Claro')) colorOperador = '#E60000';
        else if (info.operador.includes('Movistar')) colorOperador = '#00A8FF';
        else if (info.operador.includes('Tigo')) colorOperador = '#FF6B00';
        else if (info.operador.includes('WOM')) colorOperador = '#8A2BE2';
        else if (info.operador.includes('Avantel')) colorOperador = '#00CED1';
        else if (info.operador.includes('ETB')) colorOperador = '#008080';
        else if (info.operador.includes('Virgin')) colorOperador = '#FF69B4';
        else if (info.operador.includes('Partners')) colorOperador = '#4682B4';
        else if (info.operador.includes('Fijo')) colorOperador = '#28a745';
        
        modalHTML += `
          <tr style="border-bottom: 1px solid #eee; transition: background 0.2s;">
            <td style="padding: 10px; font-weight: bold; color: #666; vertical-align: top;">${i + 1}</td>
            <td style="padding: 10px; vertical-align: top;">
              <div style="font-weight: bold; color: #003366; font-family: 'Courier New', monospace;">${num}</div>
              <div style="font-size: 11px; color: #666; margin-top: 4px;">
                ${info.ciudad ? `<span style="background: #e9ecef; padding: 2px 8px; border-radius: 10px; margin-right: 5px;">${info.ciudad}</span>` : ''}
              </div>
            </td>
            <td style="padding: 10px; vertical-align: top;">
              <span style="background: ${info.tipo === 'Móvil' ? '#28a745' : '#007bff'}; color: white; padding: 4px 10px; border-radius: 12px; font-size: 11px; display: inline-block;">
                ${info.tipo}
              </span>
            </td>
            <td style="padding: 10px; vertical-align: top;">
              <span style="background: ${colorOperador}; color: white; padding: 4px 10px; border-radius: 12px; font-size: 11px; display: inline-block; white-space: nowrap;">
                ${info.operador}
              </span>
            </td>
            <td style="padding: 10px; vertical-align: top;">
              <div style="display: flex; gap: 6px;">
                <a href="tel:${cleanNum}" title="Llamar" style="background: #28a745; color: white; width: 32px; height: 32px; border-radius: 50%; display: flex; align-items: center; justify-content: center; text-decoration: none; font-size: 14px; transition: transform 0.2s;" onmouseover="this.style.transform='scale(1.1)'" onmouseout="this.style.transform='scale(1)'">📱</a>
                ${isMobile ? `
                  <a href="https://wa.me/57${whatsappNum}" target="_blank" title="WhatsApp" style="background: #25d366; color: white; width: 32px; height: 32px; border-radius: 50%; display: flex; align-items: center; justify-content: center; text-decoration: none; font-size: 14px; transition: transform 0.2s;" onmouseover="this.style.transform='scale(1.1)'" onmouseout="this.style.transform='scale(1)'">💬</a>
                ` : ''}
                <button class="copiar-btn" data-numero="${cleanNum.replace(/"/g, '&quot;')}" title="Copiar número" style="background: #6c757d; color: white; width: 32px; height: 32px; border-radius: 50%; display: flex; align-items: center; justify-content: center; border: none; cursor: pointer; font-size: 14px; transition: transform 0.2s;" onmouseover="this.style.transform='scale(1.1)'" onmouseout="this.style.transform='scale(1)'">📋</button>
              </div>
            </td>
          </tr>
        `;
      });
      
      modalHTML += `
            </tbody>
          </table>
        </div>
        
        <div style="background: #f8f9fa; padding: 15px; border-radius: 5px; border: 1px solid #ddd;">
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 10px; font-size: 12px;">
            <div style="background: white; padding: 10px; border-radius: 5px; border-left: 4px solid #003366;">
              <div style="font-weight: bold; color: #003366; margin-bottom: 5px;">📊 Estadísticas</div>
              <div>Total: <strong>${estadisticas.total}</strong></div>
              <div>Móviles: <strong>${estadisticas.moviles}</strong></div>
              <div>Fijos: <strong>${estadisticas.fijos}</strong></div>
            </div>
            <div style="background: white; padding: 10px; border-radius: 5px; border-left: 4px solid #28a745;">
              <div style="font-weight: bold; color: #003366; margin-bottom: 5px;">📁 Exportación</div>
              <div>Formato: <strong>CSV UTF-8</strong></div>
              <div>Caracteres: <strong>Español completo</strong></div>
              <div>Metadatos: <strong>Incluidos</strong></div>
            </div>
          </div>
        </div>
        
        <div style="margin-top: 15px; text-align: center; font-size: 11px; color: #666; padding-top: 10px; border-top: 1px solid #eee;">
          <div>🇨🇴 Extractor de Teléfonos Colombia v2.0 • ${new Date().toLocaleDateString('es-CO')}</div>
          <div style="margin-top: 5px;">Los acentos, tildes y caracteres especiales se preservan correctamente en el CSV</div>
        </div>
      `;
      
      // Ahora asignar el HTML al modal
      modal.innerHTML = modalHTML;
      
      // **Agregar event listeners después de crear el contenido**
      
      // 1. Botón para cerrar el modal
      document.getElementById('cerrar-modal-btn').addEventListener('click', function() {
        document.getElementById('telefonos-colombia-modal').remove();
      });
      
      // 2. Botón para descargar CSV
      document.getElementById('descargar-csv-btn').addEventListener('click', function() {
        const originalText = this.innerHTML;
        this.innerHTML = '<span style="margin-right: 8px;">⏳</span> Generando CSV UTF-8...';
        this.disabled = true;
        this.style.opacity = '0.7';
        
        setTimeout(() => {
          generarCSV();
          this.innerHTML = '<span style="margin-right: 8px;">✅</span> CSV Descargado!';
          this.style.background = 'linear-gradient(135deg, #198754, #20c997)';
          
          setTimeout(() => {
            this.innerHTML = originalText;
            this.disabled = false;
            this.style.opacity = '1';
            this.style.background = 'linear-gradient(135deg, #28a745, #20c997)';
          }, 2000);
        }, 800);
      });
      
      // 3. Botones para copiar números
      const copiarBtns = modal.querySelectorAll('.copiar-btn');
      copiarBtns.forEach(btn => {
        btn.addEventListener('click', function() {
          const numero = this.getAttribute('data-numero');
          navigator.clipboard.writeText(numero).then(() => {
            const originalHTML = this.innerHTML;
            const originalBackground = this.style.background;
            
            this.innerHTML = '✓';
            this.style.background = '#198754';
            
            setTimeout(() => {
              this.innerHTML = originalHTML;
              this.style.background = originalBackground;
            }, 1000);
          }).catch(err => {
            console.error('Error al copiar: ', err);
            // Fallback para navegadores antiguos
            const textArea = document.createElement('textarea');
            textArea.value = numero;
            document.body.appendChild(textArea);
            textArea.select();
            try {
              document.execCommand('copy');
              const originalHTML = this.innerHTML;
              this.innerHTML = '✓';
              this.style.background = '#198754';
              setTimeout(() => {
                this.innerHTML = originalHTML;
                this.style.background = '';
              }, 1000);
            } catch (err) {
              console.error('Fallback error: ', err);
              alert('Error al copiar al portapapeles');
            }
            document.body.removeChild(textArea);
          });
        });
      });
      
      // 4. Agregar tecla Escape para cerrar
      const escapeHandler = function(event) {
        if (event.key === 'Escape') {
          const modal = document.getElementById('telefonos-colombia-modal');
          if (modal) {
            modal.remove();
            document.removeEventListener('keydown', escapeHandler);
          }
        }
      };
      document.addEventListener('keydown', escapeHandler);
      
      // Hacer la función global para poder llamarla desde consola
      window.generarCSV = generarCSV;
    }
  }

  // Buscar enlaces de teléfono en atributos href
  const phoneLinks = Array.from(document.querySelectorAll('a[href^="tel:"], a[href^="TEL:"]'));
  phoneLinks.forEach(link => {
    const href = link.getAttribute('href');
    const phoneNumber = href.replace(/^tel:/i, '');
    if (phoneNumber) {
      foundNumbers.add(phoneNumber);
    }
  });

  console.log('');
  console.log('='.repeat(60));
  console.log('✅ Extracción completada exitosamente');
  console.log('💡 Sugerencia: Revisa el modal flotante o descarga el CSV');
  console.log('📞 Para regenerar el CSV, ejecuta: generarCSV()');
  console.log('='.repeat(60));
})();