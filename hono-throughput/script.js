const res=document.getElementById('res');
function run(){
  const txt=document.getElementById('input').value || '';
  const items=parseInt(document.getElementById('items').value||'0',10);
  const lines = txt ? txt.split('\n').length : 0;
  const total = lines + items;
  const est = (total/1500).toFixed(2);
  res.innerText = 'Units: ' + total + '\nEstimated cost: ' + est + ' ms (simulated)';
}