const labels = document.querySelectorAll('.form-control')

labels.forEach(label => {
    label.innerHTML = label.innerText
        .split('')
        .map((latter, idx) => '<span style"transitio-delay:${idx *50}ms">${letter}</span>')
        .join('')
})