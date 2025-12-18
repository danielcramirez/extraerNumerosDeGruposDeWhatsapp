# ❓ Preguntas Frecuentes (FAQ)

## General

### ¿Qué hace este script?

Este script extrae números de teléfono colombianos de cualquier página web (incluyendo WhatsApp Web) y los exporta a un archivo CSV con información detallada. El script está optimizado específicamente para números de Colombia, identificando operadores móviles (Claro, Movistar, Tigo, WOM, Avantel, ETB, Virgin Mobile, Partners) y códigos de área de ciudades colombianas.

### ¿Es legal usar este script?

El script es legal siempre que:
- Tengas permiso para extraer los números
- Cumplas con las leyes de protección de datos (RGPD, etc.)
- No uses los números para spam o propósitos ilegales

⚠️ **Importante**: Eres responsable del uso que hagas de la información extraída.

### ¿Es seguro?

Sí, el script:
- ✅ Se ejecuta localmente en tu navegador
- ✅ No envía datos a servidores externos
- ✅ No requiere instalación de software adicional
- ✅ Es código abierto y auditable

### ¿Funciona en WhatsApp móvil?

No, el script está diseñado para ejecutarse en cualquier página web vista desde un navegador de escritorio. La aplicación móvil tiene restricciones que impiden ejecutar código JavaScript personalizado.

### ¿Solo funciona en WhatsApp Web?

No, aunque está optimizado para WhatsApp Web, el script funciona en **cualquier página web** que contenga números de teléfono colombianos: sitios de contacto, directorios empresariales, páginas de servicios, redes sociales, etc.

### ¿Qué operadores móviles detecta?

El script identifica automáticamente los siguientes operadores colombianos:
- 🔴 **Claro**: 310-323
- 🔵 **Movistar**: 300-309
- 🟠 **Tigo**: 330-339
- 🟣 **WOM**: 350-359
- 🔷 **Avantel**: 360-369
- 🟢 **ETB**: 370-379
- 🟡 **Virgin Mobile**: 380-389
- 🔹 **Partners Telecom**: 390-399

## Uso y Funcionamiento

### ¿Cuántos números puede extraer?

El script extrae todos los números visibles en la página actual. Para WhatsApp Web:
- Debes abrir el grupo y ver la lista de participantes
- Desplázate por la lista completa para cargar todos los contactos
- El script buscará en todo el texto visible de la página

### ¿Funciona en todos los navegadores?

Sí, funciona en:
- ✅ Google Chrome
- ✅ Mozilla Firefox
- ✅ Microsoft Edge
- ✅ Safari
- ✅ Opera

### ¿Por qué no extrae todos los números?

Posibles razones:
1. **Carga parcial**: En WhatsApp Web, debes desplazarte por la lista completa de participantes
2. **Formato no colombiano**: Solo detecta números de Colombia (móviles 3XX y fijos 1-8XX)
3. **Formato no reconocido**: El número debe tener al menos 10 dígitos
4. **Falsos positivos filtrados**: Fechas, códigos postales y números muy cortos se excluyen automáticamente

**Solución**: 
- Desplázate por toda la lista de participantes en WhatsApp Web
- Verifica que los números tengan formato colombiano
- Revisa la consola para ver qué números fueron encontrados

### ¿Puedo extraer de múltiples grupos a la vez?

No automáticamente. Debes:
1. Ejecutar el script en cada grupo o página
2. Cada ejecución genera un CSV separado con fecha y nombre de página
3. Puedes combinar los CSV manualmente en Excel o Google Sheets

### ¿Qué información extrae el script?

El CSV generado incluye 10 columnas:
1. **Número**: Índice del registro
2. **Formato Original**: El número tal como aparece en la página
3. **Tipo**: Móvil, Fijo (Bogotá) o Fijo Regional
4. **Ciudad/Región**: Para fijos, identifica la ciudad (Bogotá, Medellín, Cali, etc.)
5. **Operador**: Claro, Movistar, Tigo, WOM, etc.
6. **Teléfono Limpio**: Número sin espacios ni caracteres especiales
7. **Enlace Llamada**: URL tel: para hacer clic y llamar
8. **Enlace WhatsApp**: URL wa.me para móviles
9. **Fecha Extracción**: Fecha y hora con zona horaria de Colombia
10. **Página Origen**: URL completa de donde se extrajeron los números

Además, incluye metadatos al final del CSV con estadísticas.

## Errores Comunes

### "No se encontraron números"

**Causas**:
- No hay números colombianos en la página (el script solo detecta formato colombiano)
- La página aún no ha cargado completamente
- Los números están en formato no estándar

**Solución**:
1. Verifica que haya números colombianos visibles (3XX XXX XXXX o 1XX XXX XXXX)
2. Espera a que la página cargue completamente
3. En WhatsApp Web, abre la información del grupo y desplázate por los participantes
4. Revisa la consola del navegador para ver mensajes de diagnóstico

### "El script no hace nada"

**Causas**:
- Error al copiar el código
- Navegador bloqueando la ejecución
- Versión desactualizada

**Solución**:
1. Copia el código completo de nuevo
2. Verifica la consola para errores
3. Actualiza el script a la última versión
4. Intenta con otro navegador

### "Archivo CSV no se descarga"

**Causas**:
- Bloqueador de descargas activo
- Configuración de seguridad del navegador

**Solución**:
1. Permite las descargas desde web.whatsapp.com
2. Verifica que no haya bloqueadores activos
3. Revisa la carpeta de descargas

### "Números duplicados"

El script elimina duplicados automáticamente usando un Set. Si aparecen duplicados:
- Puede ser que el formato sea ligeramente diferente (ej: "+57 310 123 4567" vs "310 123 4567")
- El script conserva el formato original encontrado
- En Excel: Datos → Quitar duplicados
- En Google Sheets: Datos → Eliminar duplicados

### El modal no aparece

**Causas**:
- Bloqueador de ventanas emergentes
- CSS de la página interfiriendo
- Error en la ejecución del script

**Solución**:
1. Revisa la consola del navegador (F12) para ver si hay números encontrados
2. El modal aparece en la esquina superior derecha con z-index alto
3. Si no aparece pero los números se listaron en consola, ejecuta: `generarCSV()` para descargar directamente
4. Intenta recargar la página y ejecutar el script de nuevo

## Privacidad y Seguridad

### ¿WhatsApp puede detectar el uso del script?

El script solo lee información visible en tu pantalla. No interfiere con las funciones de WhatsApp ni viola sus términos de servicio de manera técnica. Sin embargo:
- Lee los términos de servicio de WhatsApp
- Usa bajo tu propia responsabilidad

### ¿Puedo ser bloqueado por usar esto?

No hay evidencia de que WhatsApp bloquee cuentas por usar scripts de este tipo, pero:
- Evita uso excesivo o automatización agresiva
- No uses bots que interactúen con la API no oficial
- Sé responsable con los datos extraídos

### ¿Los números se guardan en algún servidor?

No. Todo el proceso ocurre en tu navegador:
1. El script lee los datos de la página
2. Genera el CSV localmente
3. Lo descarga directamente a tu computadora

No hay transmisión de datos a terceros.

## Formato y Exportación

### ¿Por qué CSV con UTF-8 BOM?

El script usa UTF-8 con BOM (Byte Order Mark) para garantizar que Excel y otros programas reconozcan correctamente los caracteres especiales del español:
- ✅ Acentos: áéíóú, ÁÉÍÓÚ
- ✅ Letra ñ y Ñ
- ✅ Nombres de ciudades: Bogotá, Medellín, Cúcuta, etc.
- ✅ Compatible con Excel sin necesidad de importación especial

### ¿Puedo cambiar el formato de salida?

Sí, puedes modificar la función `generarCSV()` en `script.js` para:
- Cambiar el delimitador (punto y coma para Excel en español: `;`)
- Añadir o quitar columnas
- Exportar a JSON: `JSON.stringify(datos, null, 2)`
- Cambiar el nombre del archivo

Ejemplo para usar punto y coma:
```javascript
const csvContent = datos.map(row => row.join(';')).join('\n');
```

### ¿Cómo importo el CSV en Excel?

Gracias al BOM UTF-8, el CSV se abre directamente en Excel sin problemas:
1. **Método simple**: Haz doble clic en el archivo CSV
2. **Método avanzado** (si necesitas configuración):
   - Abre Excel
   - Datos → Obtener datos → De archivo → De texto/CSV
   - Selecciona el archivo
   - Excel detectará automáticamente UTF-8
   - Verifica que el delimitador sea "Coma"
   - Clic en "Cargar"

Los acentos y caracteres especiales deben verse correctamente.

### ¿Cómo importo en Google Sheets?

1. Abre Google Sheets
2. Archivo → Importar
3. Selecciona el archivo CSV
4. Elige las opciones de importación

### ¿Puedo extraer también los nombres?

Sí, el script extrae el texto visible de la página. Para WhatsApp Web específicamente:
- Los nombres aparecen junto a los números
- Puedes modificar el script para capturar nombres
- La información está en los elementos `[data-testid="cell-frame-container"]`

Ejemplo de modificación:
```javascript
const nombre = contacto.querySelector('[data-testid="cell-frame-title"]')?.innerText;
```

### ¿Cómo uso los enlaces de WhatsApp generados?

El CSV incluye una columna "Enlace WhatsApp" para números móviles:
- Formato: `https://wa.me/57XXXXXXXXXX`
- Haz clic para abrir WhatsApp Web o la app
- Funciona en computadora y móvil
- Se abre directamente en el chat con ese número

### ¿Qué significa cada color en el modal?

Los colores identifican visualmente los operadores:
- 🔴 **Rojo**: Claro
- 🔵 **Azul**: Movistar
- 🟠 **Naranja**: Tigo
- 🟣 **Morado**: WOM
- 🔷 **Cyan**: Avantel
- 🟢 **Verde oscuro**: ETB
- 🟡 **Rosa**: Virgin Mobile
- 🔹 **Azul acero**: Partners Telecom
- 🟢 **Verde**: Teléfono Fijo

## Desarrollo y Personalización

### ¿Cómo modifico el script?

1. Abre `script.js` en un editor de texto
2. Modifica las funciones según tus necesidades
3. Guarda y prueba en WhatsApp Web

### ¿Puedo contribuir al proyecto?

¡Sí! Las contribuciones son bienvenidas:
- Reporta bugs
- Sugiere mejoras
- Envía pull requests
- Mejora la documentación

### ¿Dónde reporto problemas?

Abre un issue en el repositorio de GitHub con:
- Descripción del problema
- Pasos para reproducir
- Navegador y versión
- Mensajes de error (si aplica)

## Limitaciones Conocidas

### ¿Qué no puede hacer este script?

- ❌ Extraer números que no sean de Colombia (está optimizado solo para formato colombiano)
- ❌ Detectar números en imágenes o contenido multimedia
- ❌ Extraer mensajes o historial de conversaciones
- ❌ Modificar o enviar mensajes automáticamente
- ❌ Funcionar en aplicaciones móviles
- ❌ Detectar números con menos de 10 dígitos
- ❌ Validar si el número está activo o existe realmente

### ¿Por qué estas limitaciones?

- El script solo lee texto visible en la página (DOM)
- Está específicamente diseñado para el sistema de numeración colombiano
- No tiene acceso a APIs de WhatsApp o validación de números
- Solo analiza contenido ya renderizado en el navegador
- Por privacidad y seguridad, no almacena ni transmite datos

### ¿Cómo funciona la detección de operadores?

El script identifica el operador basándose en los primeros 3 dígitos del número móvil:

```javascript
Ejemplos:
310 123 4567 → Claro (rango 310-323)
300 123 4567 → Movistar (rango 300-309)  
330 123 4567 → Tigo (rango 330-339)
350 123 4567 → WOM (rango 350-359)
```

Los rangos están definidos por el Ministerio de Tecnologías de la Información y las Comunicaciones de Colombia.

## Funcionalidades Especiales

### ¿Cómo funciona el botón "Copiar"?

Cada número en el modal tiene un botón 📋 que:
1. Copia el número limpio al portapapeles
2. Cambia a ✓ verde por 1 segundo confirmando la copia
3. Usa `navigator.clipboard.writeText()` (moderno)
4. Incluye fallback para navegadores antiguos

### ¿Puedo cerrar el modal y volver a abrirlo?

Sí:
- **Cerrar**: Clic en X, o presiona la tecla `Escape`
- **Reabrir**: Ejecuta el script completo de nuevo
- **Solo descargar CSV**: Ejecuta `generarCSV()` en la consola

### ¿El modal interfiere con la página?

No:
- Usa `z-index: 999999` para aparecer sobre todo
- Se puede mover si es necesario (scrollable)
- No modifica el contenido de la página original
- Se puede cerrar fácilmente

### ¿Qué son las estadísticas que muestra?

El script muestra en consola y en el modal:
- 📊 **Total de números**: Cantidad total encontrada
- 📱 **Móviles**: Números que empiezan con 3 (celulares)
- 📞 **Fijos**: Números de líneas fijas (1-8)
- 📈 **Por operador**: Distribución visual con barras
- 🏙️ **Por ciudad**: Para números fijos (Bogotá, Medellín, Cali, etc.)

## Otros

### ¿Hay algún costo?

No, el script es completamente gratuito y de código abierto (Licencia MIT).

### ¿Hay soporte técnico?

El proyecto es mantenido por la comunidad. Puedes:
- Revisar la documentación
- Buscar issues similares en GitHub
- Abrir un nuevo issue
- Contribuir con mejoras

### ¿Se actualizará el script?

Sí, el proyecto se actualiza para:
- Mantener compatibilidad con WhatsApp Web
- Añadir nuevas funciones
- Corregir bugs
- Mejorar el rendimiento

### ¿Puedo usar esto comercialmente?

Sí, la licencia MIT lo permite. Sin embargo:
- Mantén la atribución al proyecto original
- Respeta las leyes de protección de datos de Colombia
- Cumple con la Ley 1581 de 2012 (Protección de Datos Personales)
- Usa de manera ética y responsable
- Obtén consentimiento de los titulares de los datos cuando sea necesario

### ¿El script funciona con números internacionales?

No, este script está específicamente optimizado para **números colombianos únicamente**:
- Móviles: 3XX XXX XXXX (10 dígitos)
- Fijos Bogotá: 1XX XXX XXXX (10 dígitos)
- Fijos regionales: 2-8XX XXX XXXX (10 dígitos)
- Con código país: +57 o 57 al inicio

Si necesitas otros países, tendrás que modificar los patrones regex en el código.

### ¿Cómo regenero el CSV sin ejecutar todo el script?

Después de ejecutar el script una vez, puedes regenerar el CSV ejecutando en la consola:

```javascript
generarCSV()
```

Esto volverá a generar y descargar el CSV con los mismos números encontrados, actualizando la fecha y hora.

---

## 💡 ¿No encuentras tu pregunta?

- Revisa la [documentación completa](USAGE.md)
- Consulta los [formatos soportados](FORMATS.md)
- Consulta los [ejemplos](../examples/)
- Abre un issue en el repositorio de GitHub

## 🇨🇴 Información específica de Colombia

### ¿Qué códigos de área reconoce?

- **1**: Bogotá D.C.
- **2**: Pasto / Popayán (Nariño, Cauca)
- **4**: Medellín (Antioquia)
- **5**: Cali (Valle del Cauca)
- **6**: Pereira / Armenia (Risaralda, Quindío)
- **7**: Bucaramanga / Cúcuta (Santander, Norte de Santander)
- **8**: Barranquilla / Cartagena (Atlántico, Bolívar)

### ¿Por qué algunos números móviles salen como "Desconocido"?

Si un número móvil aparece con operador "Desconocido":
- Puede ser un rango nuevo no actualizado en el script
- Verifica que el número sea válido (10 dígitos, empieza con 3)
- Los rangos de operadores se actualizan periódicamente por el MinTIC

### ¿El script valida si el número existe?

No, el script solo:
- ✅ Identifica patrones de números colombianos
- ✅ Detecta el operador por el rango
- ✅ Identifica la ciudad para números fijos
- ❌ NO valida si el número está activo
- ❌ NO verifica si el número existe realmente
- ❌ NO consulta bases de datos de operadores

Para validar números reales, necesitarías usar una API de validación de teléfonos.
