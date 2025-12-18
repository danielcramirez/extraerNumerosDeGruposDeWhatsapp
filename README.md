# 📱 Extractor de Números de Teléfono - Colombia 🇨🇴

Script JavaScript optimizado para extraer, identificar y clasificar números de teléfono colombianos desde cualquier página web, con especial énfasis en WhatsApp Web.

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-yellow.svg)](https://www.javascript.com/)
[![Colombia](https://img.shields.io/badge/País-Colombia%20🇨🇴-blue.svg)](https://www.colombia.co/)

## ✨ Características Principales

- 🇨🇴 **Optimizado para Colombia**: Detecta números móviles (300-399) y fijos (1-8XX)
- 📱 **Identificación de Operadores**: Claro, Movistar, Tigo, WOM, Avantel, ETB, Virgin Mobile, Partners
- 🎨 **Modal Interactivo**: Vista previa con colores por operador y botones de acción
- 📊 **Estadísticas en Tiempo Real**: Distribución visual por operador en consola
- 📄 **Exportación CSV UTF-8 BOM**: Soporte completo para caracteres especiales (áéíóú, ñ)
- 🔗 **Enlaces Directos**: Genera URLs tel: y WhatsApp (wa.me) automáticamente
- 📍 **Identificación Geográfica**: Detecta ciudad/región para números fijos
- 🎯 **Filtros Anti-Falsos Positivos**: Elimina fechas, códigos postales, etc.
- 💾 **10 Columnas de Datos**: Información completa con metadatos
- 🌐 **Universal**: Funciona en cualquier página web, no solo WhatsApp

## 🎬 Demo Visual

![Extractor en Acción](https://via.placeholder.com/800x400/003366/FCD116?text=Modal+Interactivo+con+Números+Colombianos)

*Modal flotante mostrando números extraídos con colores por operador*

## 🚀 Instalación Rápida

### Método 1: Script de Consola (Recomendado)

1. Abre la página con números colombianos (ej: WhatsApp Web)
2. Presiona `F12` para abrir la consola del navegador
3. Copia todo el contenido de [`script.js`](script.js)
4. Pégalo en la consola y presiona `Enter`
5. ¡Listo! Verás el modal flotante con los números

### Método 2: Bookmarklet

1. Crea un nuevo marcador en tu navegador
2. Copia el contenido de [`bookmarklet.js`](bookmarklet.js)
3. Pégalo en la URL del marcador
4. Haz clic en el marcador cuando estés en una página con números

## 📋 Requisitos

- ✅ Navegador moderno (Chrome, Firefox, Edge, Safari, Opera)
- ✅ JavaScript habilitado
- ✅ Conexión a Internet
- ✅ Para WhatsApp Web: Cuenta activa de WhatsApp

## 🎯 Casos de Uso

### WhatsApp Web
```javascript
1. Abre web.whatsapp.com
2. Selecciona un grupo
3. Abre "Info del grupo" → "Participantes"
4. Desplázate hasta el final de la lista
5. Ejecuta el script
```

### Otras Páginas Web
- Directorios empresariales
- Páginas de contacto
- Portales de clasificados
- Redes sociales
- Sitios de servicios

## 📊 Salida del Script

### Consola del Navegador
```
🔍 BÚSQUEDA DE NÚMEROS DE TELÉFONO - COLOMBIA 🇨🇴
============================================================
📱 RANGOS DE OPERADORES EN COLOMBIA:
   • Movistar: 300-309
   • Claro: 310-323
   • Tigo: 330-339
   • WOM: 350-359
   • Avantel: 360-369
   • ETB: 370-379
   • Virgin Mobile: 380-389
   • Partners Telecom: 390-399
============================================================
✅ Se encontraron 45 número(s) de teléfono colombiano(s)

📊 DISTRIBUCIÓN POR OPERADOR:
   Claro          :  15 ████████████
   Movistar       :  10 ████████
   Tigo           :   8 ██████
   WOM            :   5 ████
```

### Modal Flotante
- **Esquina superior derecha** con diseño de bandera colombiana
- **Tabla interactiva** con todos los números encontrados
- **Botones de acción**: 📱 Llamar | 💬 WhatsApp | 📋 Copiar
- **Colores por operador**: Identificación visual rápida
- **Estadísticas**: Total, móviles, fijos
- **Botón "Descargar CSV"**: Exportación con un clic

### Archivo CSV Generado

**Nombre**: `teléfonos_colombia_[NombrePágina]_[Fecha].csv`

**Estructura** (10 columnas):

| # | Formato Original | Tipo | Ciudad/Región | Operador | Teléfono Limpio | Enlace Llamada | Enlace WhatsApp | Fecha Extracción | Página Origen |
|---|-----------------|------|---------------|----------|-----------------|----------------|-----------------|------------------|---------------|
| 1 | +57 310 123 4567 | Móvil | | Claro | +573101234567 | tel:+573101234567 | https://wa.me/573101234567 | 18/12/2025, 14:30:45 | https://... |
| 2 | 300 456 7890 | Móvil | | Movistar | 3004567890 | tel:3004567890 | https://wa.me/573004567890 | 18/12/2025, 14:30:45 | https://... |

**Metadatos incluidos al final**:
- Fecha y hora de extracción (zona horaria Colombia)
- URL de origen
- Título de la página
- Estadísticas (total, móviles, fijos)

## 🎨 Colores de Operadores en el Modal

- 🔴 **Rojo**: Claro (310-323)
- 🔵 **Azul**: Movistar (300-309)
- 🟠 **Naranja**: Tigo (330-339)
- 🟣 **Morado**: WOM (350-359)
- 🔷 **Cyan**: Avantel (360-369)
- 🟢 **Verde oscuro**: ETB (370-379)
- 🟡 **Rosa**: Virgin Mobile (380-389)
- 🔹 **Azul acero**: Partners Telecom (390-399)
- 🟢 **Verde**: Teléfono Fijo

## 📱 Operadores Móviles Soportados

| Operador | Rangos | Ejemplo |
|----------|--------|---------|
| Claro | 310-323 | 310 123 4567 |
| Movistar | 300-309 | 300 123 4567 |
| Tigo | 330-339 | 330 123 4567 |
| WOM | 350-359 | 350 123 4567 |
| Avantel | 360-369 | 360 123 4567 |
| ETB | 370-379 | 370 123 4567 |
| Virgin Mobile | 380-389 | 380 123 4567 |
| Partners Telecom | 390-399 | 390 123 4567 |

## 📞 Números Fijos Soportados

| Código | Ciudad/Región | Ejemplo |
|--------|---------------|---------|
| 1 | Bogotá D.C. | 1 234 5678 |
| 2 | Pasto, Popayán | 2 345 6789 |
| 4 | Medellín | 4 234 5678 |
| 5 | Cali | 5 345 6789 |
| 6 | Pereira, Armenia | 6 234 5678 |
| 7 | Bucaramanga, Cúcuta | 7 345 6789 |
| 8 | Barranquilla, Cartagena | 8 234 5678 |

## 🔧 Formatos Reconocidos

### Móviles
```
✅ +57 310 123 4567    (internacional con +)
✅ 57 310 123 4567     (internacional sin +)
✅ 310 123 4567        (nacional)
✅ 310-123-4567        (con guiones)
✅ 3101234567          (sin separadores)
✅ (57) 310 123 4567   (con paréntesis)
```

### Fijos
```
✅ +57 1 234 5678      (Bogotá internacional)
✅ 1 234 5678          (Bogotá nacional)
✅ 123 456 7890        (10 dígitos)
✅ +57 4 234 5678      (Medellín)
✅ 5345678901          (sin separadores)
```

## 💡 Uso Avanzado

### Regenerar CSV sin ejecutar todo el script
```javascript
generarCSV()
```

### Cerrar el modal
- Clic en la **X**
- Presiona **Escape**

### Filtrar en Excel
```
1. Abrir CSV en Excel
2. Datos → Filtro
3. Seleccionar operador deseado
```

## 📚 Documentación

- 📖 [**USAGE.md**](docs/USAGE.md) - Guía de uso detallada con ejemplos paso a paso
- ❓ [**FAQ.md**](docs/FAQ.md) - Preguntas frecuentes y solución de problemas
- 📱 [**FORMATS.md**](docs/FORMATS.md) - Formatos soportados y patrones regex
- 🌐 [**demo.html**](examples/demo.html) - Página de demostración interactiva
- 📄 [**sample_output.csv**](examples/sample_output.csv) - Ejemplo de CSV generado

## 🛡️ Privacidad y Seguridad

- ✅ **Ejecución local**: Todo se ejecuta en tu navegador
- ✅ **Sin servidores**: No envía datos a terceros
- ✅ **Código abierto**: Auditable y transparente
- ✅ **Sin instalación**: No requiere permisos especiales
- ⚠️ **Responsabilidad**: Respeta la Ley 1581 de 2012 de Colombia (Protección de Datos)

## ⚖️ Cumplimiento Legal

Este script debe usarse de manera ética y legal:

- ✅ Obtén permiso antes de extraer datos
- ✅ Cumple con la legislación colombiana de protección de datos
- ✅ No uses para spam o fines ilegales
- ✅ Respeta la privacidad de las personas
- ⚠️ Eres responsable del uso que hagas de los datos

**Ley 1581 de 2012** (Colombia): Protección de Datos Personales
- Requiere consentimiento informado
- Uso legítimo de los datos
- Seguridad en el tratamiento de información

## 🤝 Contribuciones

¡Las contribuciones son bienvenidas! Si quieres mejorar el proyecto:

1. 🍴 Fork el repositorio
2. 🌿 Crea una rama (`git checkout -b feature/mejora`)
3. 💾 Commit tus cambios (`git commit -m 'Agrega nueva característica'`)
4. 📤 Push a la rama (`git push origin feature/mejora`)
5. 🎉 Abre un Pull Request

### Ideas para contribuir
- Agregar nuevos operadores o rangos
- Mejorar patrones regex
- Traducir a otros idiomas
- Crear extensión de navegador
- Agregar soporte para otros países

## 🐛 Reportar Problemas

¿Encontraste un bug o tienes una sugerencia?

1. Busca si ya existe un issue similar
2. Abre un nuevo issue con:
   - Descripción clara del problema
   - Pasos para reproducir
   - Navegador y versión
   - Capturas de pantalla si es posible

## 📝 Changelog

### v2.0 (2025-12-18)
- ✨ Modal interactivo con colores por operador
- 📊 Estadísticas visuales en consola
- 🔗 Enlaces WhatsApp y tel: automáticos
- 📄 CSV UTF-8 con BOM (10 columnas)
- 🇨🇴 Identificación de 8 operadores colombianos
- 📍 Detección de ciudad para números fijos
- 🎨 Interfaz mejorada con bandera colombiana
- 📚 Documentación completa en español

### v1.0 (Inicial)
- Extracción básica de números
- Exportación CSV simple

## 🔮 Roadmap

- [ ] Extensión para Chrome/Firefox
- [ ] API para validación de números
- [ ] Soporte para otros países latinoamericanos
- [ ] Integración con CRM
- [ ] App móvil
- [ ] Detección de portabilidad numérica

## 🛠️ Tecnologías

- **JavaScript ES6+**: Vanilla JavaScript, sin dependencias
- **Regex**: Patrones optimizados para Colombia
- **UTF-8 BOM**: Codificación para caracteres especiales
- **CSV**: Formato estándar compatible con Excel/Sheets

## 📄 Licencia

Este proyecto está licenciado bajo la [Licencia MIT](LICENSE).

```
MIT License

Copyright (c) 2025 Daniel Ramírez

Se permite el uso, copia, modificación, fusión, publicación, 
distribución, sublicencia y/o venta de copias del software.
```

## 👨‍💻 Autor

**Daniel Ramírez**
- GitHub: [@danielcramirez](https://github.com/danielcramirez)
- Repositorio: [extraerNumerosDeGruposDeWhatsapp](https://github.com/danielcramirez/extraerNumerosDeGruposDeWhatsapp)

## 🌟 Agradecimientos

- MinTIC Colombia por la información de rangos de operadores
- Comunidad de desarrolladores JavaScript
- Usuarios que han probado y dado feedback

## 📞 Soporte

¿Necesitas ayuda?

- 📖 Lee la [documentación completa](docs/USAGE.md)
- ❓ Revisa las [preguntas frecuentes](docs/FAQ.md)
- 🐛 Abre un [issue](https://github.com/danielcramirez/extraerNumerosDeGruposDeWhatsapp/issues)

---

<div align="center">

**⭐ Si este proyecto te fue útil, dale una estrella en GitHub ⭐**

🇨🇴 Hecho con ❤️ en Colombia 🇨🇴

[⬆ Volver arriba](#-extractor-de-números-de-teléfono---colombia-)

</div>
