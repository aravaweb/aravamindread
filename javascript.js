let form = document.querySelector("form");
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            document.querySelector("#sub").value = "Submiting..";
            let data = new FormData(form);
            fetch('https://script.google.com/macros/s/AKfycbzEnbFPJFm78IUVtc2v12aIvITXHrG6mqU7dYuAAOwSCjTIPOggdMBd0vKEehZTiJwwbQ/exec', {
                    method: "POST",
                    body: data
                })
                .then(res => res.text())
                .then(data => {
                    document.querySelector("#msg").innerHTML = data;
                    document.querySelector("#sub").value = "Submit"
                });
        })