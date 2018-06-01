window.cipher = {
  encode: (string, offset) => {
    let endmessage = "";
    for(let i = 0; i < string.length; i++){
      let acsii = string.charCodeAt(i);
      let newposition = (acsii - 65 + offset) % 26;
      let acsii1 = String.fromCharCode(newposition + 65);
      endmessage += acsii1;
      
    }
    return endmessage;
  },
  decode: (string, offset) => {
    let endmessage = "";
    for(let i = 0; i < string.length; i++){
      let acsii = string.charCodeAt(i);
      let newposition = (acsii - 65 - offset) % 26;
      let acsii1 = String.fromCharCode(newposition + 65);
      endmessage += acsii1;
    }
  return endmessage;
  }
  
}