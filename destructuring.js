// DESTRUCTURING ARRAY

let friends = ["Randi", "Nudew", "Kamil", "Fahri", "Syafa", "Rizky", "Rahma"];

const [first, second, thridh, fourth, ...more] = friends;
// console.log(first, second, thridh, fourth, more);

const [e, d, c, b, ...a] = [20, 40, 60, 70, 80, 90, 100];
// console.log(a, b, c, d, e)

// DESTRUCTION OBJECT

let friendsList = [
    {
        nama: "Ikhor",
        umur: 23,
        asal: "Blitar",
        domisili: "Bandung",
    },
    {
        nama: "Nudew",
        umur: 23,
        asal: "Sengkang",
        domisili: "Jakarta",
    },
    {
        nama: "Randi",
        umur: 25,
        asal: "Bukittinggi",
        domisili: "Padang",
    },
    {
        nama: "Kamil",
        umur: 23,
        asal: "Amuntai",
        domisili: "Jakarta",
    },
    {
        nama: "Syafa",
        umur: 24,
        asal: "Ponorogo",
        domisili: "Ponorogo",
    },
    {
        nama: "Rizky",
        umur: 24,
        asal: "Majalengka",
        domisili: "Majalengka",
    },
    {
        nama: "Fahri",
        umur: 23,
        asal: "Karawang",
        domisili: "Bogor",
    },
    {
        nama: "Rahma",
        umur: 24,
        asla: "Bandung",
        domisili: "Bandung",
    }
]

const [ikhor, nudew, { nama, umur }, { nama: kamil }, ...lainnya] = friendsList;
// console.log(nudew, ikhor);
// console.log(nama, umur, kamil);

// USING IN PARAMATER FUNCTION

function generateBiodata([, ...more]) {
    friendName = "";
    friendAge = "";
    for (let perFriend of more) {
        let { nama: n, umur: a } = perFriend;
        friendName += n + ". ";
        friendAge += a + ". ";
    }


    return `
    Temennya Ikhor itu ada "${friendName}"

    Umur mereka secara berurutan adakah "${friendAge}"
    `;
}

// console.log(generateBiodata(friendsList))


let nilai = [20, 40, 60, 70, 80, 90, 100];
function jumlahNilai([n1, n2]) {
    total = n1 + n2;
    return total
}

// console.log(jumlahNilai(nilai));


//DEFAULT VALUE

let biodata = {
    nama: "Ikhor",
    umur: 23,
    asal: "Blitar",
    domisili: "Bandung",
    // LinkedIn: []
}

const { LinkedIn: sosmed = "belum ada" } = biodata;
console.log(sosmed);
