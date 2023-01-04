# Sniffr Backend - The NodeJS Version

Background: The backend for this project was originally written in Python and hosted on Heroku. Since the service is no longer available at its original pricing tier, the API had to be moved to a new location. This also provides a good opportunity to create a version in NodeJS.

## API

[Run in Postman](https://documenter.getpostman.com/view/12180328/2s83tGnWnR)

### Auth Routes

* POST `/register`: `email, password`
* POST `/login`: `email, password` &rarr; JWT

```js
token = jwt.encode(
  {
    {
      "user_id",
      "exp" // 7 Days
    },
    SECRET_KEY // from .env
  }
)
return {token, 201}
```

### User Routes

POST   `/user/edit` *PUT?*: `email, birthday, gender, max_distance, name, user_bio, zipcod, user_pic`
DELETE `/user`

### Dog Routes

* GET `/dogs`
* GET `/dog:id`
* GET (user's) `dogs/user`
* POST `/dog`: `dog_name, breed_id, size_id, temperament_id, owner_id, age, sex, is_vaccinated, is_fixed, dog_bio, dog_pic, activities[]`
* POST *PUT* (edit) `/dog`: `dog_name, dog_id, breed_id, owner_id, age, sex, is_vaccinated, dog_bio, dog_pic`

### Swipe Routes

* GET    `/swipes`
* GET    `/pastswipes`
* POST   `/swipe`: `swiped_dog_id, is_interested`
* DELETE `/swipe`: `swipe_id`

### Match Routes

* GET `/matches`

### Info Routes

* GET /breeds
* GET /activities
* GET /temperaments
* GET /sizes

## Database Schema

* User
* Dog
* Breeds
* Activities
* Temperaments
* Sizes
* Swipes
* Matches
