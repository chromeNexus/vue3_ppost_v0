var faker = require('faker');

/* 
address =>
address
zipCode
zipCodeByState
city
cityPrefix
citySuffix
streetName
streetAddress
streetSuffix
streetPrefix
secondaryAddress
county
country
countryCode
state
stateAbbr
latitude
longitude
direction
cardinalDirection
ordinalDirection
nearbyGPSCoordinate
timeZone 
*/
const randomName = faker.name.findName(); // Rowan Nikolaus
const randomEmail = faker.internet.email(); // Kassandra.Haley@erich.biz
const randomCard = faker.helpers.createCard(); // random contact card containing many properties
const test 

// Constructor function for Person objects
function Person(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
  }
  
  // Create two Person objects
  var myFather = new Person("John", "Doe", 50, "blue");
  var myMother = new Person("Sally", "Rally", 48, "green");
  
  // Display age
  document.getElementById("demo").innerHTML =
  "My father is " + myFather.age + ". My mother is " + myMother.age + "."; 

  // Constructor function for Person objects
function Person(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
  }
  
  // Create a Person object
  var myFather = new Person("John", "Doe", 50, "blue");
  cpnsole.log(myFather);

/*

commerce
color
department
productName
price
productAdjective
productMaterial
product
productDescription
company
suffixes
companyName
companySuffix
catchPhrase
bs
catchPhraseAdjective
catchPhraseDescriptor
catchPhraseNoun
bsAdjective
bsBuzz
bsNoun
database
column
type
collation
engine
date
past
future
between
recent
soon
month
weekday
fake
finance
account
accountName
routingNumber
mask
amount
transactionType
currencyCode
currencyName
currencySymbol
bitcoinAddress
litecoinAddress
creditCardNumber
creditCardCVV
ethereumAddress
iban
bic
transactionDescription
git
branch
commitEntry
commitMessage
commitSha
shortSha
hacker
abbreviation
adjective
noun
verb
ingverb
phrase
helpers
randomize
slugify
replaceSymbolWithNumber
replaceSymbols
replaceCreditCardSymbols
repeatString
regexpStyleStringParse
shuffle
mustache
createCard
contextualCard
userCard
createTransaction
image
image
avatar
imageUrl
abstract
animals
business
cats
city
food
nightlife
fashion
people
nature
sports
technics
transport
dataUri
lorempixel
unsplash
lorempicsum
internet
avatar
email
exampleEmail
userName
protocol
url
domainName
domainSuffix
domainWord
ip
ipv6
userAgent
color
mac
password
lorem
word
words
sentence
slug
sentences
paragraph
paragraphs
text
lines
music
genre
name
firstName
lastName
middleName
findName
jobTitle
gender
prefix
suffix
title
jobDescriptor
jobArea
jobType
phone
phoneNumber
phoneNumberFormat
phoneFormats
random
number
float
arrayElement
arrayElements
objectElement
uuid
boolean
word
words
image
locale
alpha
alphaNumeric
hexaDecimal
system
fileName
commonFileName
mimeType
commonFileType
commonFileExt
fileType
fileExt
directoryPath
filePath
semver
time
recent
unique
vehicle
vehicle
manufacturer
model
type
fuel
vin
color

*/
