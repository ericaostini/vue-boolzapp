const {createApp} = Vue;
const DateTime = luxon.DateTime;
const now = DateTime.now()

createApp({
    data() {
        return {
            contacts: [
                {
                    id: 1,
                    name: 'Michele',
                    avatar: './img/avatar_1.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Hai portato a spasso il cane?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Ricordati di stendere i panni',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 16:15:22',
                            message: 'Tutto fatto!',
                            status: 'received'
                        }
                    ],
                },
                {
                    id: 2,
                    name: 'Fabio',
                    avatar: './img/avatar_2.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '20/03/2020 16:30:00',
                            message: 'Ciao come stai?',
                            status: 'sent'
                        },
                        {
                            date: '20/03/2020 16:30:55',
                            message: 'Bene grazie! Stasera ci vediamo?',
                            status: 'received'
                        },
                        {
                            date: '20/03/2020 16:35:00',
                            message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                            status: 'sent'
                        }
                    ],
                },
                {
                    id: 3,
                    name: 'Samuele',
                    avatar: './img/avatar_3.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '28/03/2020 10:10:40',
                            message: 'La Marianna va in campagna',
                            status: 'received'
                        },
                        {
                            date: '28/03/2020 10:20:10',
                            message: 'Sicuro di non aver sbagliato chat?',
                            status: 'sent'
                        },
                        {
                            date: '28/03/2020 16:15:22',
                            message: 'Ah scusa!',
                            status: 'received'
                        }
                    ],
                },
                {
                    id: 4,
                    name: 'Alessandro B.',
                    avatar: './img/avatar_4.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Lo sai che ha aperto una nuova pizzeria?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Si, ma preferirei andare al cinema',
                            status: 'received'
                        }
                    ],
                },
                {
                    id: 5,
                    name: 'Alessandro L.',
                    avatar: './img/avatar_5.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ricordati di chiamare la nonna',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Va bene, stasera la sento',
                            status: 'received'
                        }
                    ],
                },
                {
                    id: 6,
                    name: 'Claudia',
                    avatar: './img/avatar_6.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ciao Claudia, hai novità?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Non ancora',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            message: 'Nessuna nuova, buona nuova',
                            status: 'sent'
                        }
                    ],
                },
                {
                    id: 7,
                    name: 'Federico',
                    avatar: './img/avatar_7.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Fai gli auguri a Martina che è il suo compleanno!',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Grazie per avermelo ricordato, le scrivo subito!',
                            status: 'received'
                        }
                    ],
                },
                {
                    id: 8,
                    name: 'Davide',
                    avatar: './img/avatar_8.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ciao, andiamo a mangiare la pizza stasera?',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            message: 'OK!!',
                            status: 'received'
                        }
                    ],
                }
            ],
            activeIndex: 0,
            message: "",
            replied: "",
            checkName: "",
            clickMessage: null,
            showChat: false,
            shortAnswers: ["Ok, va bene", "Ciao", "Buonagiornata", "Notte"],
            randomNumb: 0,
            darkMode: false
        }
    },
    methods: {
        displayContact(id){
            this.activeIndex = this.contacts.findIndex((contact) => contact.id === id);
            this.showChat = true;
        },
        getLastMsg(id){
            const contact = this.contacts.find((contact) => contact.id === id)
            const lenContact = contact.messages.length;
            return contact.messages[lenContact -1].message;
        },
        lastAccess(id){
            const contact = this.contacts.find((contact) => contact.id === id)
            const lenContact = contact.messages.length;
            const data =  contact.messages[lenContact -1].date;
            return data.substring(11,16)
        },
        addNewMsg(){
            const newMsg = {
                            date: now.setLocale('it').toFormat('F'),
                            message: this.message,
                            status: 'sent'
                        }
            if (this.message === ""){
                return
            } else{
                this.activeContact.messages.push(newMsg);
            }
            this.message = " ";
            this.randomResp = () => this.shortAnswers[Math.floor(Math.random() * this.shortAnswers.length)]
            setTimeout(() => {
                const newMsg = {
                    date: now.setLocale('it').toFormat('F'),
                    message: this.randomResp(),
                    status: 'received'
                }
                this.activeContact.messages.push(newMsg);
            },1000)
            this.$nextTick(() => {
                this.$refs.messages[this.$refs.messages.length -1].scrollIntoView({ behavior: "smooth", block: "end", inline: "end" });
            })
            },
            // checkNames(){
            //     this.contacts.forEach(contact => {
            //         if(!contact.name.includes(this.checkName)){
            //             contact.visible = false
            //         } else {
            //             contact.visible = true
            //         }
            //     });
            // },
            dropDown(id){
                this.clickMessage = id
                let subMenu = document.getElementsByClassName("sub-menu-wrap");
                subMenu[id].classList.toggle("open-menu")
            },
            deleteMsg(id){
                    this.clickMessage = id
                    this.activeContact.messages.splice(id, 1)
                    let subMenu = document.getElementsByClassName("sub-menu-wrap");
                    subMenu[id].classList.remove("open-menu")
            }
    },
    computed:{
        activeContact(){
            return this.contacts[this.activeIndex]
        },
        filterContact(){
            return this.contacts.filter((contact) => contact.name.toLowerCase().includes(this.checkName))
        },
    }
}).mount("#app")