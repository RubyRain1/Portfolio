const h1 = document.querySelector('.heading1');
const h2 = document.querySelector('.heading2');
const p1 = document.querySelector('.p1');
const p2 = document.querySelector('.p2');

const observer = new IntersectionObserver(entries => 
    {
        entries.forEach(entry=> 
            {
                /* if(entry.isIntersecting)
                    entry.target.classList.add('visible');
                if(!entry.isIntersecting)
                entry.target.classList.remove('visible'); */ /* this is how it can be done with if statements but it can be altered to  */
            entry.target.classList.toggle('visible', entry.isIntersecting) /*  this is just a cleaner code. it is saying if entry.isIntersecting is true, add visible if not remove. */
            })
    });

observer.observe(h1);
observer.observe(h2);
observer.observe(p1);
observer.observe(p2); /* this is what the observer will be observing.. helps to tell what text is supposed to be visible or not. */