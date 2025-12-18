/**
 * Bookmarklet para extraer números de WhatsApp Web
 * 
 * Para usar:
 * 1. Crea un nuevo marcador en tu navegador
 * 2. Copia todo el código de abajo en la URL del marcador
 * 3. Abre WhatsApp Web y navega a un grupo
 * 4. Haz clic en el marcador
 */

javascript:(function(){function e(){const e=[];document.querySelectorAll('[data-testid="cell-frame-container"]').forEach(t=>{const a=t.innerText.match(/\+?\d{1,4}[\s-]?\(?\d{1,4}\)?[\s-]?\d{1,4}[\s-]?\d{1,9}/g);a&&a.forEach(t=>e.push(t.trim()))});return[...new Set(e)]}function t(e){let t="Número\n";e.forEach(e=>{t+=`${e}\n`});const a=new Blob([t],{type:"text/csv;charset=utf-8;"}),n=document.createElement("a"),r=URL.createObjectURL(a);n.setAttribute("href",r),n.setAttribute("download",`numeros_whatsapp_${Date.now()}.csv`),n.style.visibility="hidden",document.body.appendChild(n),n.click(),document.body.removeChild(n)}const a=e();a.length>0?(t(a),alert(`✅ Se extrajeron ${a.length} números correctamente`)):alert("❌ No se encontraron números. Asegúrate de estar en un grupo de WhatsApp Web.")})();
