export default function ContactForm() {
    return (
        <form id="form" action="https://formspree.io/f/YOURAPI" method="POST" className="flex flex-wrap -m-1 overflow-x-hidden text-primary-dark">
            <label className="w-full px-2 py-1 md:w-1/2">
            <input required type="text" className="w-full" name="name" placeholder="Name" />
            </label>
            <label className="w-full px-2 py-1 md:w-1/2">
            <input required type="tel" className="w-full" name="telephone" placeholder="Telephone" />
            </label>
            <label className="w-full p-1">
            <input required type="email" className="w-full" name="email" placeholder="Email" />
            </label>
            <label className="w-full p-1">
            <textarea required placeholder="Your message" name="message" className="w-full"></textarea>
            </label>
            <input type="text" name="_gotcha" className="hidden" />
            <div className="w-full p-1">
            <input type="submit" className="mx-auto mb-4 cursor-pointer btn md:mb-0 text-primary" value="Send Enquiry" />
            </div>
        </form>
    )
}