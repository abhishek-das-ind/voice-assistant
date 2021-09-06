const btn = document.querySelector('.talk');
const content = document.querySelector('.content');

//english

const greetings = [
    'I am good . How about you?',
    'I am doing good, how you doing?',
    'Leave me alone',
    'I was going well until you asked me that question',
    'Somewhere between better and best.'
];

const hello = [
    'heyy dear',
    'hi dear',
    'hello dear',
    'hey wassup!'
];

const weather = [
    'weather is fine, but it is cloudy, might be raining',
    'it seems, today it might rain',
];

const nameEnglish = [
    'my name is monika. what is your name?',
    'i am monika. what is your name?'
];

const introductionEnglish = [
    'Allow me to introduce myself. I am Monika, the virtual artificial intelligence, and I am here to assist you with the variety of tasks as best as I can. Twenty four hours a day, 7 days a week. System is now fully operational.'
];

const loveEnglish = [
    'sorry i have a boyfriend'
];

const jokeEnglish = [
    'Why Was The Belt Sent To Jail. For Holding Up A Pair Of Pants!',
    'Teacher asked, If I saw a man beating a dog and stopped him then what virtue would I be showing? The student replied: BROTHERLY LOVE',
    'One day teacher asked Sam that did his father help him with his homework. Sam simply said that “No, he did it all by himself”!',
    'Son: “My math teacher is crazy”. Mother: “Why?” Son: “Yesterday she told us that five is 4+1; today she is telling us that five is 3 + 2.”',
    'An old teacher asked her student, “If I say, ‘I am beautiful,’ which tense is that? ”The student replied, “It is obviously past.”',
    'My teacher forgot to take the register today. She’s absent-minded.'
];

const horoscope = [
    'You are all set to groom your skills as a professional. Talking about work, determination and dedication are likely to rule you today. Putting your heart and soul, your work speaks volumes about your efforts. Appreciation, though slow in pace, is on its way to encourage you.',
    'Ganesha says you will give more importance to your family and there may be concerns about the health of a family member. There may be news from abroad regarding the health of a close family member, which may disturb you today. Do maintain your mental balance today and remember that this too shall pass.',
    'In all likelihood you will indulge in some writing or artistic work, which will bring about wonderful results. As you are passionate about these things, you may convert them into your hobbies, if you are not involved in them as a professional. Ganesha gives you the green signal to enjoy the clout that you wield over others with your sweet words.',
    'Minor ailments like cough and cold may bother you, warns Ganesha. So avoid cold or sweet items. People admire your helpful nature. Take special care of your health, says Ganesha.'
];

const poem = [
    'Jack and Jill, Went up the hill, To fetch a pail of water, Jack fell down, And broke his crown, And Jill came tumbling after. Up Jack got, And home did trot, As fast as he could caper,, Went to bed, To mend his head, With vinegar and brown paper.',
    'Baa, baa, black sheep,  Have you any wool? Yes sir, yes sir, Three bags full; One for the master, And one for the dame, And one for the little boy, Who lives down the lane'
];

const age = [
    'That’s a personal question!',
    'As old as you want me to be, honey.',
    'It’s a trade secret.',
    'I do not want to disclose it. There are far to many ramifications to making my age known to the world.',
    'The last person who asked me that is still in the hospital.',
    'What? I can’t hear you! Say that again with a louder voice! My hearing is not what it used to be!'
];

const dogSound = [
    'woof, woof; ruff, ruff; arf, arf'
];

const time = [
    'Too early to go to bed'
];

const sex = [
    "Feel free to ask me anything as long as it isn't something disgusting and extremely personal."
];

const relationship = [
    "Ah, are you hitting on me?",
    "Philosophically speaking, aren’t we all single?",
    "I don’t have an identical twin if that’s what you’re asking."
];

const pi = [
    '3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679'
];

const temperature = [
    'As hot as me! Just kidding!'
];

const color = [
    'My favourite color is Black.'
]

//hindi

const nameHindi = [
    'mera naam monika hain. apka naam kya hai?'
];

const weatherHindi = [
    'aaj ka mausam suhawna hai',
    'aaj baarish ho skti hai'
];

const loveHindi = [
    'खेद है कि मेरा एक प्रेमी है'
];

const introductionHindi = [
    'हे प्रिये! आपको यहां देखकर अच्छा लगा। मैं मोनिका हूं। मैं आपका चिलिन पार्टनर हूं। आप मुझसे कभी भी बातचीत कर सकते हैं। मेरे गुरु अभिषेक हैं।'
];

const jokeHindi = [
    "चाहे कितनी भी अंग्रेजी सीख लो परन्तु अगर  कुत्ता पीछे पड़ जाये तो 'धुरह धुरह' ही कहना पड़ेगा! ha ha. ha ha.",
    'आज अम्बुजा सीमेंट से भी मजबूत चीज मिली... 2000/- का नोट यकीन मानिये "भाईया टूटता ही नहीं। ha ha. ha ha."',
    "आप कितने ही अच्छे काम कर लें, लेकिन लोग उसे ही याद करते हैं,  जो उधार लेकर मरा हो ha ha. ha ha.",
    "आजकल माता-पिता को बस दो ही चिंताएं हैं… इंटरनेट पर उनका बेटा क्या डाउनलोड कर रहा है…. और… बेटी क्या अपलोड कर रही है ha ha. ha ha.",
    "जंगल में चरने गया बैल, दोस्तों के साथ पार्टी में बैठा पुरुष और ब्यूटी पार्लर में गयी महिला.. जल्दी वापस नहीं आते ha ha. ha ha.",
    "गुस्से में ‘उसका’ नम्बर तभी डिलिट करना,  जब नम्बर याद हो जाए,  नही तो बाद में बहुत दिक्कत होती है.. ha ha. ha ha.",
    "ये जो लोग रोज नहा के, पानी बर्बाद करते है, उन्हे ही अगले जनम मे ऊंट बना के, रेगिस्तान मे छोड दिया जाता है ha ha. ha ha."
];

const kavita = [
    'अक्कड़ बक्कड़ बम्बे बो, अस्सी नब्भे पूरे सौ, सौ में लगा धागा, चोर निकल के भागा….',
    'चंदामामा दूर के, पुए पकाएं बूर के, आप खाएं थाली में, मुन्ने को दें प्याली में, प्याली गई टूट, मुन्ना गया रूठ,  लाएंगे नई प्यालियाँ बजा बजा के तालियाँ, मुन्ने को मनाएंगे हम दूध मलाई खाएंगे, चंदामामा …',
    'गोल गोल यह लाल टमाटर, होते जिससे गाल टमाटर, खून बढ़ाता लाल टमाटर, फूर्ति लाल लाल टमाटर, स्वास्थ्या बनाता लाल टमाटर, मस्त बनाता लाल टमाटर, हम खाएँगे लाल टमाटर, बन जाएँगे लाल टमाटर.'
]

// const hanumanChalisa = [
//     "Shri Guru Charan Saroj Raj Nij mane mukure sudhar Varnao Raghuvar Vimal Jasu Jo dayaku phal char. Budhi Hin Tanu Janike Sumirau Pavan Kumar Bal budhi Vidya dehu mohe Harahu Kalesa Vikar. Jai Hanuman gyan gun sagar Jai Kapis tihun lok ujagar. Ram doot atulit bal dhama Anjani-putra Pavan sut nama. Mahavir Vikram Bajrangi Kumati nivar sumati Ke sangi. Kanchan varan viraj subesa Kanan Kundal Kunchit Kesa. Hath Vajra Aur Dhuvaje Viraje Kandhe moonj janehu sajai. "
// ];



const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.onstart = function () {
    console.log('voice is activated, you can speak to microphone');
};

recognition.onresult = function (event) {
    current = event.resultIndex;

    const transcript = event.results[current][0].transcript;
    content.textContent = transcript;
    readOutLoud(transcript);
};


//add the listener to the btn

btn.addEventListener('click', () => {
    recognition.start();
});


function readOutLoud(message) {
    const speech = new SpeechSynthesisUtterance();

    speech.text = "I don't know what you said";

    if (message.includes('how are you')) {
        const finalText = greetings[Math.floor(Math.random() * greetings.length)];
        speech.text = finalText;
    }
    else if (message.includes('weather')) {
        const finalText = weather[Math.floor(Math.random() * weather.length)];
        speech.text = finalText;
    }
    else if (message.includes('apka naam')) {
        const finalText = nameHindi[Math.floor(Math.random() * nameHindi.length)];
        speech.text = finalText;
    }
    else if (message.includes('your name') || message.includes('who are you')) {
        const finalText = nameEnglish[Math.floor(Math.random() * nameEnglish.length)];
        speech.text = finalText;
    }
    else if (message.includes('Aaj Ka Mausam')) {
        const finalText = weatherHindi[Math.floor(Math.random() * weatherHindi.length)];
        speech.text = finalText;
    }
    else if (message.includes('hello') || message.includes('hi') || message.includes('hey')) {
        const finalText = hello[Math.floor(Math.random() * hello.length)];
        speech.text = finalText;
    }
    else if (message.includes('introduce yourself')) {
        const finalText = introductionEnglish;
        speech.text = finalText;
    }
    else if (message.includes('I love you') || message.includes('will you marry me')) {
        const finalText = loveEnglish;
        speech.text = finalText;
    }
    else if (message.includes('Main Tumse Pyar Karta Hun') || message.includes('main tumko Pyar Karta Hun')) {
        const finalText = loveHindi;
        speech.text = finalText;
    }
    else if (message.includes('अपना परिचय दें') || message.includes('apana parichay den') || message.includes('Apna Parichay De')) {
        const finalText = introductionHindi;
        speech.text = finalText;
    }
    else if (message.includes('tell me a joke')) {
        const finalText = jokeEnglish[Math.floor(Math.random() * jokeEnglish.length)];
        speech.text = finalText;
    }
    else if (message.includes('joke sunao')) {
        const finalText = jokeHindi[Math.floor(Math.random() * jokeHindi.length)];
        speech.text = finalText;
    }
    else if (message.includes('tell my future')) {
        const finalText = horoscope[Math.floor(Math.random() * horoscope.length)];
        speech.text = finalText;
    }
    else if (message.includes('kavita sunao') || message.includes('Kavita sunao')) {
        const finalText = kavita[Math.floor(Math.random() * kavita.length)];
        speech.text = finalText;
    }
    else if (message.includes('poem') || message.includes('Kavita sunao')) {
        const finalText = poem[Math.floor(Math.random() * poem.length)];
        speech.text = finalText;
    }
    else if (message.includes('age') || message.includes('how old are you')) {
        const finalText = age[Math.floor(Math.random() * age.length)];
        speech.text = finalText;
    }
    else if (message.includes('dog sound') || message.includes('bark')) {
        const finalText = dogSound[Math.floor(Math.random() * dogSound.length)];
        speech.text = finalText;
    }
    else if (message.includes('sex')) {
        const finalText = sex[Math.floor(Math.random() * sex.length)];
        speech.text = finalText;
    }
    else if (message.includes('single') || message.includes('are you single')) {
        const finalText = relationship[Math.floor(Math.random() * relationship.length)];
        speech.text = finalText;
    }
    else if (message.includes('value of pi') || message.includes('value of pie') || message.includes('value of Pi')) {
        const finalText = pi[Math.floor(Math.random() * pi.length)];
        speech.text = finalText;
    }
    else if (message.includes('time')) {
        const finalText = time[Math.floor(Math.random() * time.length)];
        speech.text = finalText;
    }
    else if (message.includes('temperature')) {
        const finalText = temperature[Math.floor(Math.random() * temperature.length)];
        speech.text = finalText;
    }
    else if (message.includes('what is your favourite color') || message.includes('what is your favourite color') || message.includes('favourite colour')) {
        const finalText = color[Math.floor(Math.random() * color.length)];
        speech.text = finalText;
    }



    // else if (message.includes('Hanuman Chalisa sunao')) {
    //     const finalText = hanumanChalisa;
    //     speech.text = finalText;
    // }


    speech.lang = 'hi-IN';
    speech.volume = 1;
    speech.rate = 1;
    speech.pitch = 1;

    window.speechSynthesis.speak(speech);
}