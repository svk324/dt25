(()=>{(function(){"use strict";let r=$(".report-donut-chart-1");r.length&&r.each(function(){let t=$(this)[0].getContext("2d"),o=new Chart(t,{type:"doughnut",data:{labels:["17 - 30 Years old","31 - 50 Years old",">= 50 Years old"],datasets:[{data:[15,10,65],backgroundColor:[getColor("pending",.5),getColor("warning",.5),getColor("primary",.5)],hoverBackgroundColor:[getColor("pending",.5),getColor("warning",.5),getColor("primary",.5)],borderWidth:1,borderColor:[getColor("pending",.75),getColor("warning",.9),getColor("primary",.5)]}]},options:{maintainAspectRatio:!1,plugins:{legend:{display:!1}},cutout:"90%"}});helper.watchCssVariables("html",["color-pending","color-warning","color-primary"],e=>{o.data.datasets[0].borderColor=[getColor("pending",.75),getColor("warning",.9),getColor("primary",.5)],o.data.datasets[0].hoverBackgroundColor=[getColor("pending",.5),getColor("warning",.5),getColor("primary",.5)],o.data.datasets[0].backgroundColor=[getColor("pending",.5),getColor("warning",.5),getColor("primary",.5)],o.update()})})})();})();