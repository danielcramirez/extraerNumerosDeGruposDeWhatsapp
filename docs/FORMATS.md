# 📱 Formatos de Números Reconocidos - Colombia 🇨🇴

Este documento describe los formatos de números telefónicos **colombianos** que el script puede detectar y extraer.

## 🎯 Enfoque: Solo Colombia

⚠️ **IMPORTANTE**: Este script está específicamente optimizado para **números colombianos únicamente**. No detecta números de otros países.

## Expresiones Regulares Utilizadas

El script utiliza múltiples patrones regex específicos para Colombia:

```javascript
// Móviles con código país: +57 3XX XXX XXXX
/(\+57\s?)?3\d{2}[\s.-]?\d{3}[\s.-]?\d{4}/g

// Móviles sin código país: 3XX XXX XXXX
/3\d{2}[\s.-]?\d{3}[\s.-]?\d{4}/g

// Fijos Bogotá: +57 1XX XXX XXXX
/(\+57\s?)?1\d{2}[\s.-]?\d{3}[\s.-]?\d{4}/g

// Fijos regionales: +57 [2-8]XX XXX XXXX
/(\+57\s?)?[2-8]\d{1}[\s.-]?\d{3}[\s.-]?\d{4}/g

// Con paréntesis: (57) 3XX XXX XXXX
/\(57\)\s?[13]\d{2}[\s.-]?\d{3}[\s.-]?\d{4}/g

// 10 dígitos seguidos
/[13]\d{9}/g
```

## 📱 Formatos de Números Móviles (Celulares)

Todos los números móviles colombianos tienen **10 dígitos** y comienzan con **3** (rango 300-399).

### ✅ Formato Completo con Código País

```
+57 310 123 4567
+57 300 456 7890
+57 350 987 6543
57 310 123 4567
```

### ✅ Formato Nacional (10 dígitos)

```
310 123 4567
300 456 7890
350 987 6543
3101234567
```

### ✅ Con Diferentes Separadores

**Espacios:**
```
310 123 4567
+57 310 123 4567
57 310 123 4567
```

**Guiones:**
```
310-123-4567
+57-310-123-4567
```

**Mixto:**
```
+57 310-123-4567
57 310 123 4567
```

**Sin separadores:**
```
3101234567
573101234567
```

### 📊 Rangos por Operador

| Operador | Rangos | Ejemplo |
|----------|--------|---------|
| 🔴 **Claro** | 310-323 | +57 310 123 4567 |
| 🔵 **Movistar** | 300-309 | +57 300 123 4567 |
| 🟠 **Tigo** | 330-339 | +57 330 123 4567 |
| 🟣 **WOM** | 350-359 | +57 350 123 4567 |
| 🔷 **Avantel** | 360-369 | +57 360 123 4567 |
| 🟢 **ETB** | 370-379 | +57 370 123 4567 |
| 🟡 **Virgin Mobile** | 380-389 | +57 380 123 4567 |
| 🔹 **Partners Telecom** | 390-399 | +57 390 123 4567 |

## 📞 Formatos de Números Fijos

### Bogotá D.C. (Código 1)

Números fijos de Bogotá tienen **10 dígitos** y comienzan con **1**.

**Ejemplos válidos:**
```
+57 1 234 5678
+57 123 456 7890
57 1 234 5678
1 234 5678
123 456 7890
1234567890
```

### Otras Ciudades y Regiones

Números regionales comienzan con dígitos del **2 al 8**.

| Código | Ciudad/Región | Ejemplo |
|--------|---------------|---------|
| 2️⃣ | Pasto, Popayán | +57 2 345 6789 |
| 4️⃣ | Medellín | +57 4 234 5678 |
| 5️⃣ | Cali | +57 5 345 6789 |
| 6️⃣ | Pereira, Armenia | +57 6 234 5678 |
| 7️⃣ | Bucaramanga, Cúcuta | +57 7 345 6789 |
| 8️⃣ | Barranquilla, Cartagena | +57 8 234 5678 |

**Formatos reconocidos:**
```
+57 4 234 5678
57 4 234 5678
4 234 5678
423 456 7890
4234567890
```

## ✅ Todos los Formatos Válidos - Resumen

### Móviles (Celulares)
```
✅ +57 310 123 4567    (internacional con +)
✅ 57 310 123 4567     (internacional sin +)
✅ 310 123 4567        (nacional con espacios)
✅ 310-123-4567        (con guiones)
✅ 3101234567          (sin separadores)
✅ (57) 310 123 4567   (con paréntesis)
```

### Fijos Bogotá
```
✅ +57 1 234 5678      (internacional)
✅ 1 234 5678          (nacional corto)
✅ 123 456 7890        (nacional 10 dígitos)
✅ 1234567890          (sin separadores)
✅ +57-1-234-5678      (con guiones)
```

### Fijos Regionales
```
✅ +57 4 234 5678      (Medellín)
✅ +57 5 345 6789      (Cali)
✅ 423 456 7890        (Medellín sin código país)
✅ 5345678901          (sin separadores)
```

## ❌ Formatos NO Soportados

### Números con Extensiones
```
❌ +57 1 234 5678 ext. 123
❌ 310 123 4567 x123
❌ 1 234 5678 extensión 45
```
**Nota:** El número base será extraído, pero la extensión se ignorará.

### Números con Letras
```
❌ 1-800-LLAMAME
❌ 310 ABC 4567
❌ CONTACTO-123
```

### Números Incompletos
```
❌ +57
❌ 310
❌ 12345
❌ 3102 (menos de 10 dígitos)
```

### Números No Colombianos
```
❌ +1 555 123 4567     (Estados Unidos)
❌ +34 612 345 678     (España)
❌ +52 55 1234 5678    (México)
❌ 9XX XXX XXXX        (no existe en Colombia)
```

### Separadores No Estándar
```
❌ 310.123.4567        (puntos)
❌ 310/123/4567        (barras)
❌ 310·123·4567        (puntos medios)
```

## 🔍 Filtros de Falsos Positivos

El script automáticamente **excluye**:

```javascript
❌ Fechas: 12/12/2024, 25-12-2024
❌ Códigos postales: 11001
❌ Números decimales: 123.456, 1.234
❌ Números con comas: 1,234,567
❌ Códigos cortos: 123456 (menos de 10 dígitos)
❌ Documentos: 12345678 (8 dígitos, común en cédulas)
```

## 🎨 Ejemplos Reales por Operador

### Claro (310-323)
```
+57 310 123 4567
+57 311 234 5678
+57 312 345 6789
+57 320 456 7890
310 123 4567
3201234567
```

### Movistar (300-309)
```
+57 300 123 4567
+57 301 234 5678
+57 305 345 6789
300 123 4567
3051234567
```

### Tigo (330-339)
```
+57 330 123 4567
+57 335 234 5678
330 123 4567
3351234567
```

### WOM (350-359)
```
+57 350 123 4567
+57 355 234 5678
350 123 4567
3551234567
```

### Avantel (360-369)
```
+57 360 123 4567
+57 365 234 5678
360 123 4567
```

### ETB (370-379)
```
+57 370 123 4567
+57 375 234 5678
370 123 4567
```

### Virgin Mobile (380-389)
```
+57 380 123 4567
+57 385 234 5678
380 123 4567
```

### Partners Telecom (390-399)
```
+57 390 123 4567
+57 395 234 5678
390 123 4567
```

## 🛠️ Personalización del Script

### Modificar Patrones Regex

Si necesitas ajustar los patrones, edita el array `phonePatterns` en `script.js`:

```javascript
const phonePatterns = [
  // Móviles: +57 3XX XXX XXXX
  /(\+57\s?)?3\d{2}[\s.-]?\d{3}[\s.-]?\d{4}/g,
  
  // Agregar tu patrón personalizado aquí
  /tu_patron_regex_aquí/g
];
```

### Ejemplo: Aceptar Puntos como Separadores

```javascript
// Cambiar [\s.-]? por [\s.-]? en los patrones
/(\+57\s?)?3\d{2}[\s.-]?\d{3}[\s.-]?\d{4}/g
// Ahora acepta: 310.123.4567
```

### Ejemplo: Solo Números de Claro

```javascript
const phonePatterns = [
  // Solo Claro (310-323)
  /(\+57\s?)?(31[0-9]|32[0-3])\d{1}[\s.-]?\d{3}[\s.-]?\d{4}/g
];
```

## 📋 Reglas de Validación

El script aplica las siguientes validaciones:

### 1. Longitud de Dígitos
```javascript
✅ 10 dígitos: 3101234567
✅ 12 dígitos con 57: 573101234567
❌ 9 o menos dígitos
❌ 11 dígitos (no válido en Colombia)
```

### 2. Primer Dígito
```javascript
✅ Comienza con 3: Móvil
✅ Comienza con 1: Fijo Bogotá
✅ Comienza con 2-8: Fijo Regional
❌ Comienza con 9: No existe en Colombia
❌ Comienza con 0: No válido
```

### 3. Código de País
```javascript
✅ +57 o 57 al inicio
✅ Sin código de país (asume Colombia)
❌ Otros códigos (+1, +34, +52, etc.)
```

## 🔄 Normalización de Números

El script normaliza los números de las siguientes formas:

### Entrada → Salida Limpia
```javascript
+57 310 123 4567    →  +573101234567
310 123 4567        →  3101234567
310-123-4567        →  3101234567
(57) 310 123 4567   →  573101234567
3101234567          →  3101234567
```

### Formato en CSV
El CSV incluye:
- **Formato Original**: Como aparece en la página
- **Teléfono Limpio**: Solo dígitos y símbolos (+)

## 📚 Casos Especiales

### Números con Texto Alrededor
```javascript
✅ "Llama al 310 123 4567 ahora"
✅ "Contacto: +57 1 234 5678"
✅ "Tel: 310-123-4567"
✅ "Móvil: 3101234567"
```

### Enlaces HTML
```html
✅ <a href="tel:+573101234567">Llamar</a>
✅ <a href="tel:3101234567">Contacto</a>
```
El script también extrae números de atributos `href="tel:"`.

### Múltiples Números en una Línea
```javascript
✅ "310 123 4567 o 320 456 7890"
✅ "Bogotá: 1 234 5678, Móvil: 310 123 4567"
```
Cada número se extrae individualmente.

## 🌐 Zona Horaria y Metadatos

El CSV incluye metadatos con zona horaria de Colombia:

```javascript
Fecha: 18/12/2025, 14:30:45 (America/Bogota)
```

## 🎯 Tips para Mejores Resultados

### 1. WhatsApp Web
- Abre el grupo completo
- Ve a "Info del grupo" → "Participantes"
- Desplázate hasta el final de la lista
- Ejecuta el script

### 2. Páginas Web
- Espera a que la página cargue completamente
- Si hay contenido dinámico, desplázate por toda la página
- El script lee el DOM completo

### 3. Máxima Cobertura
```javascript
// El script busca en:
- document.body.innerText (texto visible)
- document.body.textContent (todo el texto)
- Enlaces <a href="tel:...">
- Atributos data-phone
```

## ⚙️ Configuración Avanzada

### Cambiar Operadores Detectados

Edita el objeto `operadoresMoviles` en `script.js`:

```javascript
const operadoresMoviles = {
  '310': 'Claro',
  '311': 'Claro',
  // Agregar nuevos rangos aquí
  '324': 'NuevoOperador'
};
```

### Añadir Códigos de Área

Edita el objeto `codigosArea`:

```javascript
const codigosArea = {
  '1': 'Bogotá D.C.',
  '4': 'Medellín',
  // Agregar nuevos códigos
  '9': 'Nueva Región'
};
```

## ✅ Validación y Verificación

### Números Válidos para Colombia

**Estructura de número móvil:**
```
+57 3XX XXX XXXX
 │   │   │   │
 │   │   │   └─ Últimos 4 dígitos (0000-9999)
 │   │   └───── 3 dígitos centrales (000-999)
 │   └───────── Prefijo operador (300-399)
 └───────────── Código país Colombia
```

**Estructura de número fijo:**
```
+57 X XXX XXXX
 │  │  │   │
 │  │  │   └─── Últimos 4 dígitos
 │  │  └─────── 3 dígitos
 │  └────────── Código ciudad (1-8)
 └───────────── Código país
```

### Verificación Manual

Para verificar si un número es válido:

1. **Móvil**: Debe tener 10 dígitos y empezar con 3
2. **Fijo**: Debe tener 10 dígitos y empezar con 1-8
3. **Código país**: +57 o 57 (opcional)

### Herramientas de Validación

**No incluidas en el script, pero recomendadas:**

```javascript
// Usando libphonenumber-js para validación avanzada
import { parsePhoneNumber } from 'libphonenumber-js';

const phoneNumber = parsePhoneNumber('+573101234567', 'CO');
console.log(phoneNumber.isValid());          // true/false
console.log(phoneNumber.formatInternational()); // +57 310 123 4567
console.log(phoneNumber.formatNational());      // 310 123 4567
console.log(phoneNumber.getType());            // 'MOBILE'
```

**Instalación:**
```bash
npm install libphonenumber-js
```

## 📝 Notas Importantes

### Sistema de Numeración Colombiano

- 📱 **Móviles**: Siempre 10 dígitos, comienzan con 3 (rango 300-399)
- 📞 **Fijos**: Siempre 10 dígitos, comienzan con 1-8 según la región
- 🌍 **Código país**: +57 (Colombia)
- ⚠️ **No existe**: Números de 9 o que empiecen con 0 o 9

### Cambios en Operadores

Los rangos de operadores pueden cambiar con el tiempo:
- El MinTIC (Ministerio de TIC) asigna nuevos rangos
- Operadores pueden adquirir rangos de otros
- La portabilidad permite cambiar de operador manteniendo el número

**Estado actual** (Diciembre 2025):
- Rangos 310-323: Claro
- Rangos 300-309: Movistar
- Rangos 330-339: Tigo
- Rangos 350-359: WOM
- Rangos 360-369: Avantel
- Rangos 370-379: ETB
- Rangos 380-389: Virgin Mobile
- Rangos 390-399: Partners Telecom

### Portabilidad Numérica

⚠️ **Importante**: En Colombia existe portabilidad numérica. Esto significa:
- Un número 310 puede ya no ser Claro
- El script identifica el operador **original** por el rango
- Para saber el operador **actual**, necesitarías consultar una API de portabilidad

### Limitaciones de Detección

El script **NO puede**:
- ❌ Validar si el número existe o está activo
- ❌ Detectar el operador real (por portabilidad)
- ❌ Verificar si el número está en servicio
- ❌ Extraer números de imágenes o PDFs
- ❌ Detectar números escritos en palabras ("tres uno cero...")

El script **SÍ puede**:
- ✅ Detectar todos los formatos visuales de números
- ✅ Identificar tipo (móvil/fijo)
- ✅ Identificar operador original por rango
- ✅ Identificar ciudad/región para fijos
- ✅ Generar enlaces WhatsApp y tel:
- ✅ Filtrar falsos positivos automáticamente

## 🔧 Solución de Problemas

### "No detecta mi número"

**Verifica:**
1. ¿Es un número colombiano válido? (10 dígitos, empieza con 1-8 o 3)
2. ¿Está visible en el texto de la página?
3. ¿Tiene un formato reconocido?

**Prueba:**
```javascript
// En la consola, busca tu número manualmente:
const texto = document.body.innerText;
console.log(texto.includes('3101234567')); // true/false
```

### "Detecta números que no son teléfonos"

**Causas comunes:**
- Fechas que parecen números (12/12/2024)
- IDs de usuario (12345678)
- Números de factura

**Solución:**
El script tiene filtros anti-falsos-positivos. Si aún detecta incorrectamente, reporta el patrón.

### "El operador está equivocado"

Puede ser por **portabilidad numérica**. El script muestra el operador original del rango, no el actual.

## 📊 Estadísticas del Script

El script proporciona:

```javascript
Total números: 45
Móviles: 38
Fijos: 7
Bogotá: 3

Por operador:
Claro:     15 ████████
Movistar:  10 █████
Tigo:       8 ████
WOM:        5 ██
```

## 🇨🇴 Referencias Oficiales

- **MinTIC**: Ministerio de Tecnologías de la Información y las Comunicaciones
- **Plan de Numeración**: [mintic.gov.co](https://www.mintic.gov.co)
- **Portabilidad**: Servicio regulado en Colombia desde 2011

## 💡 Tips de Uso

1. **Para WhatsApp Web**: Desplázate por toda la lista antes de ejecutar
2. **Para páginas web**: Espera a que cargue completamente
3. **Falsos positivos**: Revisa manualmente el CSV generado
4. **Números internacionales**: Este script NO los detectará
5. **Actualización**: Revisa periódicamente si hay nuevos rangos de operadores

## 🤝 Contribuciones

Si encuentras:
- Un formato válido que no se detecta
- Falsos positivos recurrentes
- Nuevos rangos de operadores
- Errores en códigos de área

Por favor:
1. Documenta el caso con ejemplos
2. Propón una mejora al regex
3. Abre un issue en GitHub

---

## 📚 Recursos Adicionales

- [FAQ - Preguntas Frecuentes](FAQ.md)
- [USAGE - Guía de Uso](USAGE.md)
- [README - Documentación Principal](../README.md)
- [Ejemplos](../examples/)

---

**Última actualización**: Diciembre 2025
**Versión del script**: 2.0
**Optimizado para**: 🇨🇴 Colombia
