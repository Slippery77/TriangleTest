function checkTriangle(amount1, amount2, amount3) {
    if (amount1 <= 0 || amount2 <= 0 || amount3 <= 0) {
        return "Invalid input: Side lengths must be positive numbers.";
    }
    if (amount1 + amount2 > amount3 && amount1 + amount3 > amount2 && amount2 + amount3 > amount1) {
        return "The lengths can form a triangle.";
    } else {
        return "The lengths cannot form a triangle.";
    }
}

function handleTriangle() {
    const a = Number(document.getElementById("triangleInput1").value);
    const b = Number(document.getElementById("triangleInput2").value);
    const c = Number(document.getElementById("triangleInput3").value);

    const result = checkTriangle(a, b, c);
    
    document.getElementById("triangleOutput").value = result;
}
