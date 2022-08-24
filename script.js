// Todo - Reimplement accessibility feature with a maximum value instead of set value
// Remember to add a new parameter for accessibility on the generateActivity function
// The problem with old implementation of accessibility was it was too stict and did not return many results via the api

const activity = document.querySelector("#activity")
const submit = document.querySelector("#submit")
const price = document.querySelector("#price")

// const accessibility = document.querySelector("#accessibility")
const participants = document.querySelector("#participants")
const activityDetails = document.querySelector("#activityDetails")

const generateActivity = async (type,price,participants)=>{

    

    const request = await fetch(`http://www.boredapi.com/api/activity?type=${type}&minprice=0&maxprice=${price}&participants=${participants}`)
    return request.json()

}



submit.addEventListener("click",()=>{

    const activityType = activity.options[activity.selectedIndex].value
    const activityPrice = Number(price.options[price.selectedIndex].value)
    // const activityAccessibility = Number(accessibility.options[accessibility.selectedIndex].value)
    const activityParticipants = Number(participants.value)

    console.log(activityType)
    generateActivity(activityType,activityPrice,activityParticipants)
        .then(data =>{
            console.log(data)
            if(data.activity===undefined){
                activityDetails.innerHTML = "Could not find an activity with the specified parameters"
            } else{
            activityDetails.innerHTML= data.activity}   
        })
        .catch (error =>{console.log(error)})
})
