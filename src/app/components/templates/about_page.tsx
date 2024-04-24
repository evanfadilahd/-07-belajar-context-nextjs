import Heading from "../atoms/heading";
import Post from "../atoms/post";
import Section2 from "../atoms/section2";
import AllPosts from "../organisims/allpost";

export default function AboutPage () {
    return (
        <Section2 isFancy={true}>
            <Heading>Tentang Saya</Heading>
            <Post 
                title="Saya adalah orang!"
                body="Saya adalah seorang mahasiswa di kelas 3I - TI"
            />
            <AllPosts />
        </Section2>
    )
}