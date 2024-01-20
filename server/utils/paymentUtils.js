const randomReferenceNum = function(){
  const text =  'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum fuga ducimus aspernatur reiciendis molestias blanditiis vitae accusamus id, error libero inventore ea ipsam sapiente voluptatibus laborum molestiae iure facere cum!'

  const arrayOf40Numbers = [];

  for (let i = 1; i <= 40; i++) {
    arrayOf40Numbers.push(i);
  }
  const textArr =  [...text,...arrayOf40Numbers]
  const referencesData = []

  for (let i = 1; i <= 30; i++) {
    const index =  Math.floor(Math.random() * textArr.length) + 1 
    if(textArr[index] !== ' '){
      referencesData.push(textArr[index])
    }
  }
  console.log(referencesData.join(''))
  return referencesData.join('')
}


module.exports = {randomReferenceNum}