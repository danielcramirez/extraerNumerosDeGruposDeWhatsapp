# 📖 Guía de Uso Detallada - Extractor de Números Colombia 🇨🇴

## 🎯 ¿Qué hace este script?

Extrae números de teléfono **colombianos** de cualquier página web (incluyendo WhatsApp Web) y genera un archivo CSV completo con:
- ✅ Identificación de operador (Claro, Movistar, Tigo, WOM, Avantel, ETB, Virgin, Partners)
- ✅ Tipo de número (Móvil/Fijo) y ciudad para fijos
- ✅ Enlaces directos para llamar y WhatsApp
- ✅ Modal interactivo con vista previa
- ✅ Estadísticas por operador
- ✅ Codificación UTF-8 con BOM (soporte completo para español)

## Requisitos Previos

- Navegador web moderno (Chrome, Firefox, Edge, Safari, Opera)
- Conexión a Internet
- Permisos para ejecutar JavaScript en la consola del navegador
- Para WhatsApp Web: Cuenta de WhatsApp activa

## Método 1: Script de Consola (Recomendado)

### Paso a Paso

1. **Abre la página con los números**
   
   **Para WhatsApp Web:**
   - Ve a [web.whatsapp.com](https://web.whatsapp.com)
   - Escanea el código QR con tu teléfono
   - Selecciona el grupo del cual deseas extraer números
   - Haz clic en el nombre del grupo → "Info del grupo"
   - Desplázate por **toda** la lista de participantes (importante para cargar todos)
   
   **Para cualquier otra página web:**
   - Navega a la página que contiene números colombianos
   - Espera a que la página cargue completamente
   - Desplázate por todo el contenido

2. **Abre la Consola de Desarrollador**
   - **Windows/Linux**: Presiona `F12` o `Ctrl + Shift + J`
   - **Mac**: Presiona `Cmd + Option + J`
   - O clic derecho → "Inspeccionar" → pestaña "Console"

3. **Ejecuta el Script**
   - Copia **todo** el contenido de `script.js` (desde la primera línea hasta la última)
   - Pégalo en la consola
   - Presiona `Enter`

4. **Visualiza los Resultados**
   
   El script mostrará:
   
   **En la consola:**
   ```
   🔍 BÚSQUEDA DE NÚMEROS DE TELÉFONO - COLOMBIA 🇨🇴
   ============================================================
   📱 RANGOS DE OPERADORES EN COLOMBIA:
      • Movistar: 300-309
      • Claro: 310-323
      • Tigo: 330-339
      ...
   ✅ Se encontraron 25 número(s) de teléfono colombiano(s)
   
   📊 DISTRIBUCIÓN POR OPERADOR:
      Claro          :  10 ████████████
      Movistar       :   8 ██████████
      Tigo           :   5 ██████
   ```
   
   **Modal flotante:**
   - Aparece en la esquina superior derecha
   - Muestra todos los números encontrados
   - Botones para llamar 📱, WhatsApp 💬 y copiar 📋
   - Colores por operador
   - Botón "Descargar CSV" verde

5. **Descarga el CSV**
   
   **Opción A**: Clic en el botón "Descargar CSV" del modal
   
   **Opción B**: El CSV se descarga automáticamente al ejecutar
   
   El archivo se llamará algo como:
   ```
   teléfonos_colombia_WhatsApp_2025-12-18.csv
   ```

6. **Cerrar el Modal**
   - Haz clic en la "X" en la esquina superior derecha
   - O presiona la tecla `Escape`
   - O simplemente ignóralo (no interfiere con la página)

## Método 2: Bookmarklet

### Instalación

1. **Crea un Nuevo Marcador**
   - Presiona `Ctrl + D` (Windows/Linux) o `Cmd + D` (Mac)
   - O ve a Marcadores → Añadir marcador

2. **Configura el Marcador**
   - Nombre: "Extraer Números WhatsApp"
   - URL: Copia el contenido completo de `bookmarklet.js`

3. **Guarda el Marcador**
   - Preferiblemente en la barra de marcadores para acceso rápido

### Uso del Bookmarklet

1. Abre WhatsApp Web
2. Navega al grupo deseado
3. Haz clic en el marcador que creaste
4. El CSV se descargará automáticamente

## 🔧 Solución de Problemas

### ❌ "No se encontraron números de teléfono colombianos en la página"

**Posibles causas:**
- No hay números colombianos en la página (el script solo detecta formato colombiano)
- Los números están en formato no estándar
- La página no ha cargado completamente
- En WhatsApp Web, no se ha abierto la lista de participantes

**Soluciones:**
1. **Verifica que haya números colombianos visibles**:
   - Móviles: 3XX XXX XXXX (10 dígitos)
   - Fijos: 1XX XXX XXXX o 2-8XX XXX XXXX
   
2. **Para WhatsApp Web**:
   ```
   Grupo → Info del grupo → Ver todos los participantes → 
   Desplázate hasta el final de la lista
   ```

3. **Verifica en la consola**:
   - Busca mensajes de error en rojo
   - Ejecuta: `console.log(document.body.innerText)` para ver el texto de la página

### 🚫 El Script No se Ejecuta

**Posibles causas:**
- Error al copiar el código (falta código)
- Restricciones de seguridad del navegador
- Extensiones bloqueando JavaScript

**Soluciones:**
1. **Copia correctamente**:
   - Selecciona TODO el archivo `script.js` (desde `(function() {` hasta `})()`)
   - No copies solo una parte
   
2. **Verifica errores**:
   - Mira la consola, si hay texto rojo es un error
   - Error común: `Unexpected token` = código incompleto
   
3. **Prueba en modo incógnito**:
   - Abre una ventana de incógnito
   - Las extensiones no interferirán
   
4. **Intenta otro navegador**:
   - Chrome y Edge funcionan mejor
   - Firefox también funciona bien

### 📱 El Modal No Aparece

**Posibles causas:**
- El script se ejecutó pero no encontró números
- Bloqueador de ventanas emergentes
- CSS de la página interfiriendo

**Soluciones:**
1. **Revisa la consola**:
   - Si dice "Se encontraron X números", el modal debería aparecer
   - Busca el modal en la esquina superior derecha
   
2. **Descarga el CSV directamente**:
   ```javascript
   generarCSV()
   ```
   Ejecuta esto en la consola para descargar sin modal
   
3. **Ajusta zoom del navegador**:
   - Prueba con `Ctrl + 0` (zoom 100%)

### 📊 "Números duplicados" o "Faltan números"

**Duplicados:**
- El script usa `Set()` para eliminar duplicados automáticamente
- Si aparecen, puede ser por formato diferente (+57 vs sin +57)
- Solución: Usa Excel → Datos → Quitar duplicados

**Faltan números:**
1. **WhatsApp Web**: Desplázate por TODA la lista antes de ejecutar
2. **Otras páginas**: Algunos números pueden estar en elementos ocultos
3. Ejecuta el script nuevamente después de desplazarte

### 🔤 Caracteres Raros en Excel (áéíóú, ñ)

**Causa:**
- Excel no reconoce UTF-8 correctamente

**Solución:**
El script usa UTF-8 con BOM, debería funcionar automáticamente. Si no:

**Excel:**
1. Datos → Obtener datos → De archivo → De texto/CSV
2. Selecciona el archivo
3. Origen del archivo: **65001: Unicode (UTF-8)**
4. Cargar

**LibreOffice Calc:**
1. Abre el archivo
2. Conjunto de caracteres: **Unicode (UTF-8)**
3. Aceptar

### ⚠️ "Operador Desconocido" en algunos números

**Causa:**
- El número móvil está en un rango no definido en el script
- Puede ser un rango nuevo asignado por el MinTIC

**Solución:**
- El número igual se extrae correctamente
- Solo no se puede identificar el operador específico
- Reporta el rango para actualizar el script

## 💡 Consejos y Mejores Prácticas

### 🛡️ Privacidad y Seguridad

- ⚠️ **Respeta la privacidad**: Solo extrae números de páginas donde tienes permiso
- 🇨🇴 **Cumple la ley colombiana**: Respeta la Ley 1581 de 2012 (Protección de Datos Personales)
- 🔒 **No compartas indiscriminadamente**: Los números son información sensible
- 📋 **Uso ético**: No uses los números para spam, estafas o propósitos ilegales
- ✅ **Consentimiento**: Asegúrate de tener permiso para usar los datos

### ⚡ Optimización para WhatsApp Web

**Antes de ejecutar el script:**

1. **Carga todos los participantes**:
   ```
   Grupo → Info → Participantes → Desplázate hasta el final
   ```
   ⚠️ WhatsApp carga participantes "bajo demanda". Si no te desplazas, solo extraerás los primeros.

2. **Espera unos segundos**:
   - Después de desplazarte, espera 2-3 segundos
   - Permite que WhatsApp cargue toda la información

3. **Verifica carga completa**:
   - Si el grupo tiene 100 participantes, asegúrate de ver el contador
   - El script extraerá solo lo visible en el DOM

### 📊 Interpretando los Resultados

**Consola del navegador:**
```javascript
✅ Se encontraron 45 número(s) de teléfono colombiano(s)

📊 DISTRIBUCIÓN POR OPERADOR:
   Claro          :  15 ████████
   Movistar       :  10 █████
   Tigo           :   8 ████
```

**Modal flotante:**
- 🔴 Rojo = Claro
- 🔵 Azul = Movistar  
- 🟠 Naranja = Tigo
- 🟣 Morado = WOM
- 🔷 Cyan = Avantel
- 🟢 Verde oscuro = ETB
- 🟡 Rosa = Virgin Mobile
- 🔹 Azul acero = Partners
- 🟢 Verde = Fijo

**Botones en el modal:**
- 📱 Verde = Llamar (abre marcador del sistema)
- 💬 Verde WhatsApp = Abrir chat de WhatsApp
- 📋 Gris = Copiar número al portapapeles

### 🔄 Uso Avanzado

**Regenerar CSV sin ejecutar todo:**

Después de ejecutar el script una vez, puedes regenerar el CSV:

```javascript
generarCSV()
```

**Extraer de múltiples grupos:**

1. Ejecuta el script en el Grupo 1 → Descarga CSV
2. Ejecuta el script en el Grupo 2 → Descarga CSV
3. Combina los CSV en Excel:
   - Abre ambos archivos
   - Copia los datos de uno al otro
   - Datos → Quitar duplicados

**Filtrar por operador en Excel:**

1. Abre el CSV
2. Selecciona la columna "Operador"
3. Datos → Filtro
4. Selecciona solo "Claro" (o el que necesites)

### 💾 Gestión de Archivos CSV

**Nombre del archivo:**
```
teléfonos_colombia_[NombrePágina]_[Fecha].csv
```

Ejemplo:
```
teléfonos_colombia_WhatsApp_Web_2025-12-18.csv
```

**Contenido del CSV:**

| Columna | Descripción | Ejemplo |
|---------|-------------|----------|
| Número | Índice | 1, 2, 3... |
| Formato Original | Como aparece | +57 310 123 4567 |
| Tipo | Móvil/Fijo | Móvil |
| Ciudad/Región | Para fijos | Bogotá D.C. |
| Operador | Proveedor | Claro |
| Teléfono Limpio | Sin espacios | +573101234567 |
| Enlace Llamada | URL tel: | tel:+573101234567 |
| Enlace WhatsApp | URL wa.me | https://wa.me/573101234567 |
| Fecha Extracción | Timestamp | 18/12/2025, 14:30:45 |
| Página Origen | URL fuente | https://web.whatsapp.com/... |

**Metadatos al final:**
- Total números encontrados
- Cantidad de móviles vs fijos
- Fecha y hora de extracción
- URL de origen

### 🌐 Uso en Otras Páginas Web

**El script funciona en cualquier página:**

✅ Directorios empresariales
✅ Páginas de contacto
✅ Redes sociales
✅ Portales de clasificados
✅ Sitios de servicios
✅ Blogs y foros

**Simplemente:**
1. Abre la página
2. Abre la consola (F12)
3. Pega el script
4. ¡Listo!

### 🎯 Casos de Uso Reales

**Marketing:**
- Construir base de datos de clientes potenciales
- Segmentar por operador para campañas específicas
- Exportar a CRM

**Ventas:**
- Recopilar contactos de eventos
- Seguimiento de leads
- Bases de datos de prospectos

**Organizaciones:**
- Lista de contactos de miembros
- Directorios internos
- Comunicación masiva

**Investigación:**
- Análisis de distribución de operadores
- Estadísticas geográficas (por códigos de área)
- Estudios de mercado

## 📁 Formato del Archivo CSV

### Estructura Completa

```csv
Número,Formato Original,Tipo,Ciudad/Región,Operador,Teléfono Limpio,Enlace Llamada,Enlace WhatsApp,Fecha Extracción,Página Origen
1,"+57 310 123 4567","Móvil","","Claro","+573101234567","tel:+573101234567","https://wa.me/573101234567","18/12/2025, 14:30:45","https://web.whatsapp.com/..."
2,"300 456 7890","Móvil","","Movistar","3004567890","tel:3004567890","https://wa.me/573004567890","18/12/2025, 14:30:45","https://web.whatsapp.com/..."
3,"+57 1 234 5678","Fijo (Bogotá)","Bogotá D.C.","Teléfono Fijo","+5712345678","tel:+5712345678","No disponible","18/12/2025, 14:30:45","https://web.whatsapp.com/..."

--- METADATOS DE EXTRACCIÓN ---
Fecha y hora,18/12/2025, 14:30:45
URL de origen,https://web.whatsapp.com/...
Título página,WhatsApp
Total números encontrados,45
Móviles,38
Fijos,7
Generado con,Extractor Teléfonos Colombia v2.0
```

### Características del CSV

✅ **Codificación: UTF-8 con BOM**
- Soporte completo para español: áéíóú, ñ, Ñ, tildes
- Compatible con Excel sin configuración adicional
- Funciona en Google Sheets, LibreOffice, Numbers

✅ **Delimitador: Coma (`,`)**
- Estándar internacional
- Valores encerrados en comillas dobles `"..."` cuando es necesario

✅ **Escape de caracteres especiales**
- Comillas dobles dentro de valores se duplican: `""` 
- Saltos de línea preservados correctamente

### 📊 Procesamiento Posterior

**Importar en Excel:**
1. Doble clic en el archivo CSV (se abre automáticamente)
2. O: Datos → Obtener datos → De texto/CSV → Seleccionar archivo

**Importar en Google Sheets:**
1. Archivo → Importar
2. Seleccionar archivo CSV
3. Clic en "Importar datos"

**Importar en CRM:**
- **Salesforce**: Importar leads/contactos desde CSV
- **HubSpot**: Contactos → Importar → Seleccionar CSV
- **Zoho CRM**: Mapear campos del CSV a campos del CRM

**Bases de datos:**
```sql
-- MySQL/PostgreSQL
LOAD DATA INFILE 'telefonos_colombia.csv' 
INTO TABLE contactos 
FIELDS TERMINATED BY ',' 
ENCLOSED BY '"'
LINES TERMINATED BY '\n'
IGNORE 1 ROWS;
```

**Python (pandas):**
```python
import pandas as pd

df = pd.read_csv('telefonos_colombia.csv', encoding='utf-8-sig')
print(df.head())

# Filtrar solo móviles de Claro
claro = df[df['Operador'] == 'Claro']
```

**JavaScript/Node.js:**
```javascript
const fs = require('fs');
const csv = require('csv-parser');

fs.createReadStream('telefonos_colombia.csv')
  .pipe(csv())
  .on('data', (row) => {
    console.log(row['Formato Original'], row['Operador']);
  });
```

### 📱 Uso de Enlaces Generados

**Enlaces de llamada (`tel:`):**
```html
<a href="tel:+573101234567">Llamar</a>
```
- En móvil: Abre el marcador con el número
- En desktop: Abre la app de teléfono (Skype, etc.)

**Enlaces de WhatsApp (`wa.me`):**
```html
<a href="https://wa.me/573101234567">WhatsApp</a>
```
- Abre WhatsApp Web o la app
- Va directo al chat con ese número
- Funciona en desktop y móvil

### 📈 Análisis de Datos

**Excel - Tabla Dinámica:**
1. Selecciona los datos
2. Insertar → Tabla dinámica
3. Arrastra "Operador" a Filas
4. Arrastra "Número" a Valores (Contar)
5. Visualiza distribución por operador

**Power BI / Tableau:**
- Importa el CSV como fuente de datos
- Crea visualizaciones de distribución geográfica
- Analiza tendencias por operador

## 🔗 Recursos Adicionales

### Documentación

- 📋 [FAQ.md](FAQ.md) - Preguntas frecuentes
- 📱 [FORMATS.md](FORMATS.md) - Formatos soportados y patrones regex
- 📖 [README.md](../README.md) - Información general del proyecto

### Ejemplos

- 🌐 [demo.html](../examples/demo.html) - Página de demostración interactiva
- 📄 [sample_output.csv](../examples/sample_output.csv) - Ejemplo de CSV generado

### Soporte

- 🐛 **Bugs**: Abre un issue en GitHub
- 💡 **Ideas**: Sugiere mejoras en GitHub Discussions
- 📧 **Contacto**: Usa los canales del repositorio

## 🎓 Tips Finales

1. **Siempre desplázate** por toda la lista en WhatsApp Web antes de ejecutar
2. **Verifica la consola** para diagnósticos y estadísticas
3. **Usa el modal** para vista previa rápida antes de descargar
4. **Ejecuta `generarCSV()`** para re-descargar sin ejecutar todo el script
5. **Presiona Escape** para cerrar el modal
6. **Revisa [FORMATS.md](FORMATS.md)** si algún número no se detecta
7. **Consulta [FAQ.md](FAQ.md)** para problemas comunes
8. **Respeta la privacidad** y la ley colombiana de protección de datos

---

**🇨🇴 Extractor de Teléfonos Colombia v2.0**

*Optimizado para números colombianos • Soporte completo UTF-8 • Identificación de operadores*

---

¿Preguntas? Consulta el [FAQ](FAQ.md) o abre un issue en GitHub.
