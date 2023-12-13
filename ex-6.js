let height = undefined;
function checkHeight(check) {
    check = check ?? `Height is not defined`
    console.log(check)
    return check
}
let result = checkHeight(height);

console.log(result); //  Result ควรจะได้ออกมาเป็น “Height is not defined”
