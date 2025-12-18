# Guía Rápida de Uso

## 🚀 Inicio Rápido

### Opción 1: Usar el Demo
1. Abre `demo.html` en tu navegador
2. Haz clic en "🚀 Ejecutar Extractor"
3. ¡Listo! Verás la interfaz con números detectados

### Opción 2: Consola del Navegador (Cualquier Página Web)

#### Paso 1: Abrir Consola
- **Windows/Linux**: Presiona `F12` o `Ctrl + Shift + I`
- **Mac**: Presiona `Cmd + Option + I`
- Ve a la pestaña "Console"

#### Paso 2: Cargar el Script
1. Abre el archivo `extraerNumeros.js` en un editor de texto
2. Copia **todo** el contenido (Ctrl+A, Ctrl+C)
3. Pega en la consola del navegador (Ctrl+V)
4. Presiona `Enter`

#### Paso 3: Usar la Interfaz
- La interfaz aparecerá en la esquina superior derecha
- Verás todos los números colombianos detectados en la página
- Usa los botones para interactuar:
  - 📞 **Llamar**: Abre el marcador del teléfono
  - 💬 **WhatsApp**: Abre chat de WhatsApp
  - 📋 **Copiar**: Copia el número individual
  - 💾 **Exportar CSV**: Descarga todos los números
  - 📋 **Copiar Todos**: Copia todos al portapapeles

## 📱 Casos de Uso

### WhatsApp Web
1. Ve a https://web.whatsapp.com
2. Abre un grupo
3. Ejecuta el script en la consola
4. Extrae todos los números del grupo

### Páginas de Contactos
1. Navega a cualquier página con números colombianos
2. Ejecuta el script
3. Exporta a CSV para guardar

### Directorios Empresariales
1. Abre una página con directorio telefónico
2. Ejecuta el script
3. Obtén listado clasificado por operador

## 📊 Formatos Detectados

El script reconoce automáticamente estos formatos:

```
+57 310 555 1234   ✅
57 320 456 7890    ✅
310 555 1234       ✅
3105551234         ✅
310-555-1234       ✅
310.555.1234       ✅
(310) 555 1234     ✅
```

## 💾 Archivo CSV Exportado

El CSV incluye las siguientes columnas:

| Número     | Formato Internacional | Prefijo | Operador  | Región                    |
|------------|----------------------|---------|-----------|---------------------------|
| 3105551234 | +57 310 555 1234     | 310     | Claro     | Colombia - Cobertura Nacional |

### Características del CSV:
- ✅ Codificación UTF-8 con BOM
- ✅ Compatible con Excel, Google Sheets, LibreOffice
- ✅ Soporta caracteres españoles (áéíóú, ñ, Ñ)
- ✅ Nombre automático con fecha: `numeros_colombianos_YYYYMMDD_HHMM.csv`

## 🔧 Solución de Problemas

### No se detectan números
- Verifica que sean números colombianos (prefijo 3XX)
- Asegúrate de que los números estén visibles en el HTML
- Recarga la página y ejecuta el script nuevamente

### No se puede copiar al portapapeles
- El navegador puede bloquear el acceso al portapapeles
- Usa el botón "Exportar CSV" como alternativa
- Copia manualmente desde la interfaz

### El CSV no muestra caracteres españoles correctamente
- Abre el CSV con la opción "UTF-8" en Excel
- En Google Sheets, importa como UTF-8
- El archivo tiene BOM para compatibilidad automática

## 🎓 Consejos Avanzados

### Acceso Programático
```javascript
// Acceder al extractor
const extractor = window.extractorNumerosCol;

// Ver números encontrados
console.log(extractor.numerosClasificados);

// Exportar programáticamente
extractor.exportarCSV();

// Copiar todos
extractor.copiarTodos();
```

### Volver a Ejecutar
```javascript
// Si cerraste la interfaz, vuelve a ejecutar
window.extractorNumerosCol.ejecutar();
```

## 📞 Operadores Incluidos

- 📱 **Tigo**: 300-309
- 📱 **Claro**: 310-329
- 📱 **Avantel**: 330-333
- 📱 **Flash Mobile**: 334-339
- 📱 **ETB**: 325, 340-343
- 📱 **Virgin Mobile**: 344-349
- 📱 **Movistar**: 350-359
- 📱 **WOM**: 360-369
- 📱 **Uff Móvil**: 324

## 🔒 Privacidad

- ✅ Todo se procesa localmente en tu navegador
- ✅ No se envían datos a ningún servidor
- ✅ No requiere conexión a internet (después de cargar)
- ✅ Sin dependencias externas
- ✅ Código abierto y auditable

## 📚 Recursos Adicionales

- **README.md**: Documentación completa
- **demo.html**: Página de demostración interactiva
- **test.html**: Página de prueba con múltiples formatos
- **extraerNumeros.js**: Código fuente comentado

---

**Desarrollado con ❤️ para Colombia**
