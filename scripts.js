function copyText() {

            /* Select text area by id*/
            let Text = document.getElementById("textbox");

            /* Select the text inside text area. */
            Text.select();

            /* Copy selected text into clipboard */
            navigator.clipboard.writeText(Text.value);

            /* Set the copied text as text for 
            div with id clipboard */
            document.getElementById("clipboard")
                .innerHTML = Text.value;
}