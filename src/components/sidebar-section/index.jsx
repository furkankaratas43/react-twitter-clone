import {Link} from "react-router-dom";
import PropTypes from "prop-types";

export default function SidebarSection({title, children, more}){
    return(
        <>
            <section className="bg-[color:var(--background-secondary)] mb-4 rounded-2xl border border-[color:var(--background-secondary)]">
                <h5 className="py-3 px-4 flex items-center text-xl font-extrabold leading-6">{title}</h5>
                <div className="grid">
                    {children}
                    {more && (
                        <Link to={more} className="h-[52px] rounded-b-2xl flex items-center text-[15px] text-[#1d9bf0] p-4 leading-5 transition-colors hover:bg-white/[0.03]">Daha fazla göster</Link>
                    )}
                </div>
            </section>
        </>
    )
}

SidebarSection.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
    more: PropTypes.oneOfType([PropTypes.bool, PropTypes.string])
}

SidebarSection.defaultProps = {
    more: false
}