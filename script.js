document.addEventListener('DOMContentLoaded', function() {

    var userStoriesArray = []

    var theForm = document.getElementById('the-form')

    theForm.addEventListener('submit', function(event) {
        
        event.preventDefault()

        var newUserStoryField = document.getElementById('new-user-story-field')
        
        var newUserStory = newUserStoryField.value

        userStoriesArray.push(newUserStory)

        document.getElementById('list-of-user-stories').innerHTML = ""

        for(var i = 0; i < userStoriesArray.length; i++) {
            createStoryItem(userStoriesArray[i])
        }
    })

    function createStoryItem(userStoryText) {
        
        var newStoryItem = document.createElement('li')

        newStoryItem.innerText = userStoryText
        
        var listOfUserStories = document.getElementById('list-of-user-stories')

        listOfUserStories.appendChild(newStoryItem)

    }
})