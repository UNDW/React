import dialogsReducer from "./dialogsReducer";
import profileReducer from "./profileReducer";
import sidebarReducer from "./sidebarReduser";



let store = {
    _state: {
        profilePage: {
            posts: [
                { id: 0, message: 'Hi, how are you?', likesCount: 12 },
                { id: 1, message: 'Its my first post', likesCount: 11 },
                { id: 2, message: 'Nice', likesCount: 5 },
                { id: 3, message: 'Thank you', likesCount: 3 },
            ],
            newPostText: 'Write you message',

        },
        dialogsPage: {
            messages: [
                { id: 0, message: 'Hi' },
                { id: 1, message: 'How are you?' },
                { id: 2, message: 'I am fine!' },
                { id: 3, message: 'Yo' },
                { id: 4, message: 'Yo' },
                { id: 5, message: 'Yo' },
                { id: 6, message: 'Yo' },
            ],
            dialogs: [
                { id: 0, name: 'Oleg' },
                { id: 1, name: 'Andrew' },
                { id: 2, name: 'Sveta' },
                { id: 3, name: 'Sasha' },
                { id: 4, name: 'Vlad' },
                { id: 5, name: 'Sergei' },
                { id: 6, name: 'Dima' },
            ],
            newMessageBody:" "
        },
        sidebar: {
            
        }
    },
    _callSubscriber() {
        console.log('State changed')
    },
    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    addPost() {
        let newPost = {
            id: 5,
            message: this._state.profilePage.newPostText,
            likesCount: 0,
        };
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = '';
        this._callSubscriber(this._state);
    },
    updateNewPostText(newText) {
        this._state.profilePage.newPostText = newText;
        this._callSubscriber(this._state);
    },
    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._state.sidebar = sidebarReducer(this._state.sidebar, action)
        this._callSubscriber(this._state);
        
    }
}




window.store = store;
export default store