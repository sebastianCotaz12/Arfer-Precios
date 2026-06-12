import type { Producto } from '../api'

function fmt(n: number) {
  return '$ ' + Math.round(n).toLocaleString('es-CO')
}

export function generarPDF(
  productos: Producto[],
  editados: Record<number, number>,
  zonaActual: string,
  cliente: string,
  fecha: string
) {
  const getPrecioA = (p: Producto) => {
    const precio = editados[p.id] ?? p.precio
    return p.factor > 0 ? Math.round(precio / p.factor) : 0
  }

  const grupos: Record<string, Producto[]> = {}
  productos.forEach(p => {
    if (!grupos[p.grupo]) grupos[p.grupo] = []
    grupos[p.grupo].push(p)
  })

  let tablas = ''
  Object.entries(grupos).forEach(([grp, rows]) => {
    const filas = rows.map(p => `
      <tr>
        <td>${p.producto}</td>
        <td><span class="tag">${p.und}</span></td>
        <td>${getPrecioA(p) > 0 ? fmt(getPrecioA(p)) : '–'}</td>
      </tr>`).join('')

    tablas += `
      <div class="section-title">${grp}</div>
      <table>
        <thead>
          <tr>
            <th>Producto</th>
            <th>Presentación</th>
            <th style="text-align:right">Precio</th>
          </tr>
        </thead>
        <tbody>${filas}</tbody>
      </table>`
  })

  const html = `<!DOCTYPE html>
  <html><head><meta charset="utf-8">
  <title>Arfert · ${zonaActual} · ${fecha}</title>
  <style>
    *{box-sizing:border-box;margin:0;padding:0;}
    body{font-family:Arial,sans-serif;color:#1a1a1a;padding:28px 36px;}
    @page{margin:16mm 14mm;}
    .header{display:flex;justify-content:space-between;align-items:center;padding-bottom:14px;border-bottom:2.5px solid #2d7a3a;margin-bottom:16px;}
    .brand-name{font-size:20px;font-weight:700;}
    .brand-sub{font-size:11px;color:#666;}
    .doc-title{font-size:14px;font-weight:700;color:#2d7a3a;text-align:right;}
    .doc-meta{font-size:10px;color:#888;margin-top:2px;text-align:right;}
    .zone-badge{display:inline-block;background:#eaf3de;color:#27500a;font-size:10px;font-weight:700;padding:2px 9px;border-radius:20px;margin-top:5px;border:.5px solid #b8d98a;}
    .cliente{background:#f7fbf7;border-radius:6px;padding:7px 12px;margin-bottom:14px;font-size:12px;}
    .cliente span{font-weight:700;font-size:13px;}
    .section-title{font-size:9.5px;font-weight:700;letter-spacing:.08em;color:#2d7a3a;text-transform:uppercase;margin:14px 0 5px;padding-bottom:3px;border-bottom:.5px solid #c8e6c9;}
    table{width:100%;border-collapse:collapse;font-size:10.5px;}
    thead tr{background:#f0f7f1;}
    th{padding:5px 8px;text-align:left;font-size:9.5px;font-weight:700;color:#27500a;border-bottom:1px solid #c8e6c9;}
    td{padding:4px 8px;border-bottom:.5px solid #f0f0f0;}
    td:nth-child(3){text-align:right;color:#235f2e;font-weight:700;}
    .tag{background:#f5f5f5;border:.5px solid #ddd;border-radius:9px;padding:1px 6px;font-size:9px;color:#555;}
    .footer{margin-top:18px;padding-top:10px;border-top:.5px solid #ddd;display:flex;justify-content:space-between;font-size:9px;color:#aaa;}
  </style>
  </head><body>
  <div class="header">
    <div>
      <div class="brand-name">Arfert</div>
      <div class="brand-sub">Agroquímicos</div>
    </div>
    <div>
      <div class="doc-title">Lista de precios 2026</div>
      <div class="doc-meta">Generado el ${fecha}</div>
      <div class="zone-badge">${zonaActual}</div>
    </div>
  </div>
  <div class="cliente">Cliente / Destinatario: <span>${cliente}</span></div>
  ${tablas}
  <div class="footer">
    <span>Precios en pesos colombianos (COP) · Vigencia: 2026 · Arfert Agroquímicos</span>
    <span>Página 1</span>
  </div>
  </body></html>`

  const w = window.open('', '_blank')!
  w.document.write(html)
  w.document.close()
  w.focus()
  setTimeout(() => w.print(), 400)
}