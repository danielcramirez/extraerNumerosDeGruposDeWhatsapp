# 📱 Extractor de Números Telefónicos Colombianos

Script de JavaScript para consola del navegador que extrae, clasifica y exporta números telefónicos colombianos de páginas web. Detecta todos los operadores móviles (prefijos 300-399) y ofrece una interfaz visual con botones para llamar y enviar mensajes de WhatsApp.

## ✨ Características

- 🔍 **Detección Automática**: Encuentra números en múltiples formatos (+57 3XX XXX XXXX, 3XXXXXXXXX, etc.)
- 📊 **Clasificación Inteligente**: Organiza por operador móvil (Claro, Movistar, Tigo, WOM, etc.)
- 🎨 **Interfaz Visual**: Panel flotante con acciones rápidas
- 📞 **Botones de Acción**: Llamar directamente o abrir WhatsApp
- 💾 **Exportación CSV**: Formato UTF-8 con soporte completo para caracteres españoles (áéíóú, ñ, Ñ)
- 🚀 **Sin Dependencias**: 100% JavaScript nativo, sin librerías externas
- 🔒 **Procesamiento Local**: Todo se ejecuta en el navegador, sin envío de datos

## 🎯 Operadores Soportados

El script detecta números de todos los operadores móviles colombianos:

- **Tigo**: 300-309
- **Claro**: 310-329
- **Avantel**: 330-333
- **Flash Mobile**: 334-339
- **ETB**: 325, 340-343
- **Virgin Mobile**: 344-349
- **Movistar**: 350-359
- **WOM**: 360-369
- **Uff Móvil**: 324

## 🚀 Uso Rápido

### Método 1: Usando el Demo HTML

1. Abre el archivo `demo.html` en tu navegador
2. Haz clic en el botón "🚀 Ejecutar Extractor"
3. La interfaz aparecerá en la esquina superior derecha

### Método 2: Consola del Navegador

1. Navega a cualquier página web que contenga números colombianos (WhatsApp Web, grupos, listas, etc.)
2. Abre la consola del navegador:
   - **Chrome/Edge**: `F12` o `Ctrl+Shift+I` (Windows/Linux) / `Cmd+Option+I` (Mac)
   - **Firefox**: `F12` o `Ctrl+Shift+K` (Windows/Linux) / `Cmd+Option+K` (Mac)
   - **Safari**: `Cmd+Option+C` (primero habilitar menú desarrollador)
3. Ve a la pestaña "Console"
4. Copia y pega el contenido completo del archivo `extraerNumeros.js`
5. Presiona `Enter`

## 📖 Instrucciones Detalladas

### Instalación

No requiere instalación. Solo necesitas los archivos del repositorio:

```bash
git clone https://github.com/danielcramirez/extraerNumerosDeGruposDeWhatsapp.git
cd extraerNumerosDeGruposDeWhatsapp
```

### Uso en Cualquier Página Web

1. **Abre la página web** que contiene números telefónicos
   - WhatsApp Web (web.whatsapp.com)
   - Grupos de WhatsApp
   - Páginas de contactos
   - Directorios telefónicos
   - Cualquier sitio web con números colombianos

2. **Ejecuta el script** usando uno de los métodos mencionados arriba

3. **Interfaz del Extractor**:
   - Aparecerá un panel flotante en la esquina superior derecha
   - Muestra el total de números encontrados
   - Lista cada número con su operador y región

4. **Acciones Disponibles**:
   - 📞 **Llamar**: Abre el marcador del teléfono
   - 💬 **WhatsApp**: Abre chat de WhatsApp con el número
   - 📋 **Copiar**: Copia el número individual
   - 💾 **Exportar CSV**: Descarga todos los números en formato CSV
   - 📋 **Copiar Todos**: Copia todos los números al portapapeles

## 📊 Formato de Exportación CSV

El archivo CSV exportado incluye:

```csv
Número,Formato Internacional,Prefijo,Operador,Región
3105551234,"+57 310 555 1234",310,"Claro","Nacional - Claro/Tigo"
3204567890,"+57 320 456 7890",320,"Tigo","Nacional - Claro/Tigo"
3501234567,"+57 350 123 4567",350,"Movistar","Nacional - Movistar"
```

**Características del CSV**:
- Codificación UTF-8 con BOM
- Soporte completo para caracteres españoles (áéíóú, ñ, Ñ)
- Compatible con Excel, Google Sheets, LibreOffice
- Nombre de archivo: `numeros_colombianos_YYYYMMDD_HHMM.csv`

## 🔧 Formatos de Número Detectados

El script reconoce números en los siguientes formatos:

- `+57 3XX XXX XXXX`
- `57 3XX XXX XXXX`
- `3XX XXX XXXX`
- `3XXXXXXXXX`
- `3XX-XXX-XXXX`
- `3XX.XXX.XXXX`
- `(3XX) XXX XXXX`
- Enlaces: `tel:+573XXXXXXXXX`
- WhatsApp: `https://wa.me/573XXXXXXXXX`

## 💻 Ejemplo de Uso

```javascript
// El script se ejecuta automáticamente al cargarse
// También puedes acceder al extractor programáticamente:

// Acceder a la instancia del extractor
const extractor = window.extractorNumerosCol;

// Ver números encontrados
console.log(extractor.numerosClasificados);

// Exportar manualmente
extractor.exportarCSV();

// Copiar todos los números
extractor.copiarTodos();
```

## 🎨 Personalización

Puedes modificar el script según tus necesidades:

- **Cambiar posición de la UI**: Edita los estilos en `crearUI()`
- **Agregar operadores**: Actualiza el objeto `OPERADORES`
- **Modificar patrones de detección**: Ajusta el array `patrones` en `extraerNumerosDePagina()`
- **Personalizar exportación**: Modifica la función `exportarCSV()`

## 🌐 Compatibilidad

- ✅ Google Chrome 90+
- ✅ Mozilla Firefox 88+
- ✅ Microsoft Edge 90+
- ✅ Safari 14+
- ✅ Opera 76+

## 📝 Notas Importantes

- El script solo procesa la página actual en el momento de ejecución
- No envía datos a servidores externos
- Requiere que los números estén visibles en el HTML de la página
- Los números deben tener el formato colombiano (prefijo 3XX)

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Por favor:

1. Haz fork del proyecto
2. Crea una rama para tu función (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## 🐛 Reportar Problemas

Si encuentras algún problema o tienes sugerencias, por favor abre un issue en GitHub.

## 👤 Autor

Daniel C. Ramirez

## 🙏 Agradecimientos

Desarrollado con ❤️ para Colombia, con soporte completo para el idioma español.
