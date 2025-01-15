document.addEventListener('DOMContentLoaded', () => {
    const codeParagraphs = document.querySelectorAll('.code');
    const codeBlocks = document.querySelectorAll('.code-block');

    // Toggle code block visibility
    codeParagraphs.forEach((paragraph, index) => {
        paragraph.addEventListener('click', () => {
            const codeBlock = codeBlocks[index];
            codeBlock.style.display = codeBlock.style.display === 'block' ? 'none' : 'block';
        });
    });

    // Copy code functionality
    const copyButtons = document.querySelectorAll('.copy-btn');

    copyButtons.forEach((button) => {
        button.addEventListener('click', () => {
            const codeBlock = button.parentElement.querySelector('code');
            const codeText = codeBlock.innerText;

            // Copy text to clipboard
            navigator.clipboard.writeText(codeText)
                .then(() => {
                    button.innerText = 'Copied!';
                    setTimeout(() => {
                        button.innerText = 'Copy';
                    }, 2000);
                })
                .catch((err) => {
                    console.error('Error copying text:', err);
                    button.innerText = 'Failed';
                    setTimeout(() => {
                        button.innerText = 'Copy';
                    }, 2000);
                });
        });
    });
});