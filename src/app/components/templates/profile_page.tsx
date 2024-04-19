import Heading from "../atoms/heading";
import Post from "../atoms/post";
import Section2 from "../atoms/section2";
import AllPosts from "../organisims/allpost";

export default function ProfilePage () {
    return (
        <Section2 isFancy={true}>
            <Heading>Profil Saya</Heading>
            <Post 
                title="Hello traveler!"
                body="Baca tentang petualangan Saya."
            />
            <AllPosts />
        </Section2>
    )
}