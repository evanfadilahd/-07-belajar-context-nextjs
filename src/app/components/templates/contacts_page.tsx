import Heading from "../atoms/heading";
import Post from "../atoms/post";
import Section2 from "../atoms/section2";
import AllPosts from "../organisims/allpost";

export default function ContactsPage () {
    return (
        <Section2 isFancy={true}>
            <Heading>Kontak Saya</Heading>
            <Post 
                title="Nomor Whatsapp saya!"
                body="Jangan dishare ke orang lain..."
            />
            <AllPosts />
        </Section2>
    )
}