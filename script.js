const uploadImage = document.getElementById('upload-image')
const fullName = document.getElementById('fullname')
const email = document.getElementById('emailaddress')
const githubUsername = document.getElementById('githubusername')

const btn =document.getElementById('btn')
const emailError =document.getElementById('email-error')
const imageError =document.getElementById('image-error')
const ticket =document.getElementById('ticket')


let data = []

btn.addEventListener('click',()=>{
    click()
  
    if(email.value.endsWith("@gmail.com") ){
        emailError.classList.remove('flex')
        emailError.classList.add('hidden')
    }else{
        emailError.classList.remove('hidden')
        emailError.classList.add('flex')
    }
    if(uploadImage.value){
        imageError.classList.remove('text-[hsl(7,71%,60%)]')
        imageError.classList.add('text-[hsl(252,6%,83%)]')
        imageError.innerHTML=`
           <img
                  class="mr-2 w-4"
                  src="assets/images/icon-info.svg"
                  alt="icon-info"
                />
                Upload your photo (JPG or PNG, max size: 5MB).
        `
    }else{
        imageError.classList.remove('text-[hsl(252,6%,83%)]')
        imageError.classList.add('text-[hsl(7,71%,60%)]')
        imageError.innerHTML=`
        <svg
                    class="mr-2"
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="none"
                    viewBox="0 0 16 16"
                  >
                    <path
                      stroke="hsl(7, 71%, 60%)"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M2 8a6 6 0 1 0 12 0A6 6 0 0 0 2 8Z"
                    />
                    <path
                      fill="hsl(7, 71%, 60%)"
                      d="M8.004 10.462V7.596ZM8 5.57v-.042Z"
                    />
                    <path
                      stroke="hsl(7, 71%, 60%)"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M8.004 10.462V7.596M8 5.569v-.042"
                    />
                  </svg>
                  Upload your photo (JPG or PNG, max size: 5MB)
        `
    }
})

function click(){
   data.push({
    image: uploadImage.value,
    fullName: fullName.value,
    email:email.value,
    githubUsername:githubUsername.value
   })
   if(email.value.endsWith("@gmail.com")&&uploadImage.value){
    ticket.innerHTML= `
             <div class="w-full flex flex-col items-center mb-20">
            <img
              class="w-[250px] py-10"
              src="assets/images/logo-full.svg"
              alt="logo"
            />
            <h1
              class="pb-4 text-white text-[50px] max-w-[700px] leading-[50px] font-[600] text-center"
            >
              Congrats, -Full Name-! Your ticket is ready.
            </h1>
            <p class="text-xl max-w-[500px] text-center text-[hsl(252,6%,83%)]">
              We've emailed your ticket to
              - Email Address -
              and will send updates in the run up to the event.
            </p>
          </div>
          <div
            class="w-full h-[280px] mt-10 flex flex-col items-center bg-[url('./assets/images/pattern-ticket.svg')] bg-no-repeat bg-center "
          >
            <div class="relative top-10 right-40">
              <img
                class="ml-2 "
                src="assets/images/logo-full.svg"
                alt="logo-full"
              />
              <p class="text-sm mt-2 ml-14 text-[hsl(252,6%,83%)]">
                Jan 31, 2025 / Austin, TX
              </p>
            </div>
            <div class="flex relative top-32 right-40">
              <img class="w-16 mr-4 rounded-lg" src="assets/images/image-avatar.jpg" alt="Avatar" />
              <div>
                <p style="text-transform: capitalize" class="text-[20px] text-white">full name</p>
                <div class="flex">
                  <img class="mr-2"  src="assets/images/icon-github.svg" alt="icon-github">
                  <p class="text-[hsl(252,6%,83%)]">@-githup name-</p>
                </div>
              </div>
            </div>
            <div class="relative left-60 rotate-90">
              <p class="text-[30px] opacity-40 text-[hsl(252,6%,83%)]">
                #01609
              </p>
            </div>
          </div>    
    `
   }
//    console.log(data)
}

