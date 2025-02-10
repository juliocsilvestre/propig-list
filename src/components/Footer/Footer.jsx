import style from "./Footer.module.css";

const Footer = () => {
    return (
        <footer className={style.footer}>
            <p>
                &copy; {new Date().getFullYear()}
                <a
                    href="https://github.com/juliocsilvestre"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {" "}
                    Julio Silvestre
                </a>
                - Sistema de Tarefas. Todos os direitos reservados.
            </p>
        </footer>
    );
};

export default Footer;
