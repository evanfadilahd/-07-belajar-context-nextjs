import { LevelContext } from "@/app/utilities/context/mycontext";

export default function Section({ level, children }: { level: number, children: any }) {
    return (
        <section className="section">
            <LevelContext.Provider value={level}>
                {children}
            </LevelContext.Provider>
        </section>
    );
}