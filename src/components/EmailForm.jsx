import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import React from "react";
import { IoIosClose } from "react-icons/io";
import "../assets/form.css";
import "../assets/buttonLink.css";

const EmailForm = ({ modelIsOpen, setModelIsOpen }) => {
  return (
    <Dialog
      open={modelIsOpen}
      onClose={() => setModelIsOpen(false)}
      className="relative z-50"
    >
      <div
        className={
          "bg-black/50 fixed inset-0 w-screen flex items-center justify-center"
        }
      >
        <DialogPanel className={"bg-white w-[95%] max-w-[45rem] p-10 relative"}>
          <button
            onClick={() => setModelIsOpen(false)}
            className={"absolute top-5 right-5 cursor-pointer"}
          >
            <IoIosClose size={25} />
          </button>
          <DialogTitle className="text-4xl mb-10 tracking-tight">
            Let's Work Together
          </DialogTitle>
          <form>
            <label className={"block mb-2"}>
              Name <span className={"text-gray-500"}>(required)</span>
            </label>
            <div className={"grid grid-cols-2 gap-x-5 gap-y-10"}>
              <div>
                <label className={"text-sm"}>First Name</label>
                <input required type={"text"} className={"w-full"} />
              </div>
              <div>
                <label className={"text-sm"}>Last Name</label>
                <input required type={"text"} className={"w-full"} />
              </div>
              <div className={"col-span-2"}>
                <label>
                  Email <span className={"text-gray-500"}>(required)</span>
                </label>
                <input required type={"email"} className={"w-full"} />
              </div>
              <div className={"col-span-2"}>
                <label>
                  Subject <span className={"text-gray-500"}>(required)</span>
                </label>
                <input required type={"text"} className={"w-full"} />
              </div>
              <div className={"col-span-2"}>
                <label>
                  Message <span className={"text-gray-500"}>(required)</span>
                </label>
                <textarea rows={5} required className={"w-full"} />
              </div>
            </div>
            <div>
              <button id="buttonLink" className={"py-5"}>
                Submit
              </button>
            </div>
          </form>
        </DialogPanel>
      </div>
    </Dialog>
  );
};

export default EmailForm;
