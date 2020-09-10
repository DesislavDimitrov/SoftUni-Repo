function numberSequence(n, k) {
    let seq = [1];
 

    for (let i = 1; i < n; i++) {

        let start = Math.max(0, i - k);
        let end = i - 1;
        let sum = start + end + 1;
        seq[i] = sum
        console.log(seq);
    }
    console.log(seq.join(' '));

} numberSequence(6, 3);

// 0 0 1 1 2 4 7 13