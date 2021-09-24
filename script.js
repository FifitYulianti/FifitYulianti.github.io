function terimaInput(){
    let nama = document.getElementById("name").value;
    let nomerTelepon = document.getElementById("telephone").value;
    let email = document.getElementById("email").value;
    let status = document.getElementById("status").value;
    let note = document.getElementById("message").value;


    if (nama != '' && (nomerTelepon != '')) {
        if(nomerTelepon[0] === '0' && nomerTelepon[1] === '8'){
            let tabel = document.getElementById("table");
            let row = tabel.insertRow(1);
            let cell1 = row.insertCell(0);
            let cell2 = row.insertCell(1);
            let cell3 = row.insertCell(2);
            let cell4 = row.insertCell(3);
            let cell5 = row.insertCell(4);
        
        
            cell1.innerHTML = nama;
            cell2.innerHTML = nomerTelepon;
            cell3.innerHTML = email;
            cell4.innerHTML = status;
            cell5.innerHTML = note;
        }else{
            alert('Anda harus mengisi nomer telepon dengan sesuai !');
            return alert
        }     
    }else{
        alert('Anda harus mengisi data dengan lengkap !');
        return alert
    }
}

