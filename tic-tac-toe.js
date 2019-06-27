var arr=document.querySelectorAll('td')
document.getElementById('reset-btn').addEventListener('click',function(){
  document.location.reload()
})
var player1=prompt('Hi, player 1 (symbol X), enter your name:')
var player2=prompt('Hi, player 2 (symbol O), enter your name:')

document.querySelector('.details').innerHTML="<p>"+player1+"'s symbol is: <strong>X</strong> </p><p>"+player2+"'s symbol is: <strong>O</strong></p>"

var last_elem='O'// To start with 'X'

var header = document.querySelector("h1")

function changeHeaderColor(){
  var letters = "0123456789ABCDEF";
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random()*16)];
  }
  header.style.color = color;
}

setInterval("changeHeaderColor()",500);

function toggleSymbol(){
   if(last_elem==='O')
   {
       this.textContent='X';
       last_elem='X';
   }
  else
  {
    this.textContent='O';
    last_elem='O';
  }
  isGameOver();
}

function isGameOver()
{
  var flag=0;
  for(i=0;i<3;i++)
  {
    if((arr[i].textContent===arr[i+3].textContent) && (arr[i].textContent===arr[i+6].textContent))
    {
      if(arr[i].textContent==='X')
        flag=1
      else if(arr[i].textContent==='O')
        flag=2
    }
  }
  for(i=0;i<9;i+=3)
  {
    if((arr[i].textContent===arr[i+1].textContent) && (arr[i].textContent===arr[i+2].textContent))
    {
      if(arr[i].textContent==='X')
        flag=1
      else if(arr[i].textContent==='O')
        flag=2
    }
  }
  if(((arr[0].textContent===arr[4].textContent) && (arr[0].textContent===arr[8].textContent))||((arr[2].textContent===arr[4].textContent) && (arr[2].textContent===arr[6].textContent)))
  {
    if(arr[4].textContent==='X')
      flag=1
    else if(arr[4].textContent==='O')
      flag=2
  }
  if(flag)
  {
    if(flag===1)
      alert(player1+' won!')
      // setTimeout(alert(player1+' won!'),1000);
    else if(flag===2)
      alert(player2+' won!'),
      // setTimeout(alert(player2+' won!'),1000);
    console.log('Game over');
    alert('Shall we restart?')
    document.location.reload();
  }
}

for(var i=0;i<9;i++)
{
  arr[i].addEventListener('click',toggleSymbol)
}
