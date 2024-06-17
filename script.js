
const btnBelakang = document.querySelector('.belakang');
btnBelakang.addEventListener('click', function(e){
    const fashion = document.querySelector('.modal-fashionBelakang');
    fashion.innerHTML = showFashion(method)
    console.log(method)
})

// function updateUI(args){
//     let box = '';
//     args.forEach(el => box = showFashion(el))
//     const fashion = document.querySelector('.modal-fashion');
//     fashion.innerHTML = box;
// }

function showFashion(args){
    return `<div class="container-fluid d-flex">
                <div class="col-md-7">
                    <img src="belakang.jpg" class="img-fluid">
                </div>
                <div class="col-md">
                    <ul class="list-group">
                        <li class="list-group-item"><strong>A-B : </strong> ${args.a_b()} </li>
                        <li class="list-group-item"><strong>A-A1 :</strong> ${args.a_a1()} </li>
                        <li class="list-group-item"><strong>A1-A2 :</strong> ${args.a1_a2()} </li>
                        <li class="list-group-item"><strong>A2-A3 :</strong> ${args.a2_a3()} </li>
                        <li class="list-group-item"><strong>B-B1 :</strong> ${args.b_b1()} </li>
                        <li class="list-group-item"><strong>B1-B2 :</strong> ${args.b1_b2()} </li>
                        <li class="list-group-item"><strong>B-K1 :</strong> ${args.b_k1()} </li>
                        <li class="list-group-item"><strong>K-K1 :</strong> ${args.k_k1()} </li>
                        <li class="list-group-item"><strong>B-C : </strong> ${args.b_c()} </li>
                        <li class="list-group-item"><strong>C-C2 :</strong> 8 CM </li>
                        <li class="list-group-item"><strong>C2-C3 :</strong> 10 CM </li>
                    </ul>
                </div>
            </div>`
}
const method = {
    leher: document.getElementById('lleher'),
    p_muka: document.getElementById('pmuka'),
    l_muka: document.getElementById('lmuka'),
    bahu: document.getElementById('lbahu'),
    badan: document.getElementById('lbadan'),
    p_punggung: document.getElementById('ppunggung'),
    l_punggung: document.getElementById('lpunggung'),
    pinggang: document.getElementById('lpinggang'),
    

    a_b: function(){
        return 1.5 + ' CM';
    },
    a_a1: function(){
        return  formatNumber((1/6 * this.leher.value) + 0.5) + " CM";
    },
    a1_a2: function(){
        return this.bahu.value + " CM";
    },
    a2_a3: function(){
        return  4 + " CM";
    },
    b_b1: function(){
        return  10 + " CM";
    },
    b1_b2: function(){
        return  formatNumber((1/2 * this.l_punggung.value)) + " CM";
    },
    b_k1: function(){
        return  22 + " CM";  //20,21,22,23
    },
    k_k1: function(){
        return  formatNumber((1/4 * this.badan.value)) -  1 + " CM";
    },
    b_c: function(){
        return  ( this.p_punggung.value) + " CM";
    },
    c_c1: function(){
        return  formatNumber((1/4 * this.pinggang.value)) + 0.5 + " CM";
    },
    // a_a1: function(){
    //     return  (1/6 * this.leher.value) + 0.5 + " CM";
    // }
}
function formatNumber(num) {
    // Cek apakah num adalah angka dengan desimal
    if ((num % 1) !== 0) {
        return parseFloat(num.toFixed(2)); // Memformat menjadi dua digit di belakang koma
    } else {
        return num; // Kembalikan angka asli jika tidak ada desimal
    }
}
console.log(method.leher)

{/* <input type="text" class="form-control" aria-label="Text input with dropdown button">
  <button class="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">Kurus</button>
  <ul class="dropdown-menu dropdown-menu-end">
    <li><a class="dropdown-item" href="#">Action</a></li>
    <li><a class="dropdown-item" href="#">Another action</a></li>
    <li><a class="dropdown-item" href="#">Something else here</a></li>
    <li><hr class="dropdown-divider"></li>
    <li><a class="dropdown-item" href="#">Separated link</a></li>
  </ul> */}