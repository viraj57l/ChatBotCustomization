import React from "react";

const Customize = ({ customizations, updateCustomization }) => {
  return (
    <div className="customize h-full w-[380px] lg:w-[1000px] bg-white  border-none rounded-xl">
      {/* title */}
      <div className=" flex gap-3 h-16 w-[380px] lg:w-[1000px] bg-slate-900 border-2 border-slate-950 rounded-t-xl p-4 text-lg">
        <h2 className="text-white">Customize Chatbot</h2>
      </div>

      <div className="space-y-2 p-2">
        {/* header bg color */}
        <div className="mr-3">
          <label className="block text-sm font-medium">Header Background</label>
          <input
            type="color"
            value={customizations.headerBgColor}
            onChange={(e) =>
              updateCustomization("headerBgColor", e.target.value)
            }
            className="mt-1 block w-full lg:w-[400px] "
          />
        </div>

        {/* Bot Message text Color */}
        <div className="mr-3">
          <label className="block text-sm font-medium">Bot Message Color</label>
          <input
            type="color"
            value={customizations.botMessageColor}
            onChange={(e) =>
              updateCustomization("botMessageColor", e.target.value)
            }
            className="mt-1 block w-full lg:w-[400px]"
          />
        </div>

        {/* User Message text Color */}

        <div className="mr-3">
          <label className="block text-sm font-medium">
            User Message Color
          </label>
          <input
            type="color"
            value={customizations.userMessageColor}
            onChange={(e) =>
              updateCustomization("userMessageColor", e.target.value)
            }
            className="mt-1 block w-full lg:w-[400px]"
          />
        </div>

        {/* User Message text Color */}

        <div className="mr-3">
          <label className="block text-sm font-medium">
            Bot Text Background Color
          </label>
          <input
            type="color"
            value={customizations.botBgColor}
            onChange={(e) => updateCustomization("botBgColor", e.target.value)}
            className="mt-1 block w-full lg:w-[400px]"
          />
        </div>

        {/* User Message text Color */}

        <div className="mr-3">
          <label className="block text-sm font-medium">
            User Text Background Color
          </label>
          <input
            type="color"
            value={customizations.userBgColor}
            onChange={(e) => updateCustomization("userBgColor", e.target.value)}
            className="mt-1 block w-full lg:w-[400px]"
          />
        </div>
        {/* border color */}
        <div className="mr-3">
          <label className="block text-sm font-medium">Border Color</label>
          <input
            type="color"
            value={customizations.bColor}
            onChange={(e) => updateCustomization("bColor", e.target.value)}
            className="mt-1 block w-full lg:w-[400px]"
          />
        </div>

        {/* border-radius */}
        <div className="mr-3">
          <label className="block text-sm font-medium">Border radius</label>
          <select
            value={customizations.bRadius}
            onChange={(e) => updateCustomization("bRadius", e.target.value)}
            className="mt-1 block w-full lg:w-[400px]"
          >
            <option value="0">None</option>
            <option value="0.125rem">sm</option>
            <option value="0.375rem">md</option>
            <option value="0.5rem">lg</option>
            <option value="0.75rem">xl</option>
            <option value="1rem">2xl</option>
            <option value="1.5rem">3xl</option>
          </select>
        </div>
        {/* Font family */}

        <div className="mr-3">
          <label className="block text-sm font-medium">Font Family</label>
          <select
            value={customizations.fontFamily}
            onChange={(e) => updateCustomization("fontFamily", e.target.value)}
            className="mt-1 block w-full  lg:w-[400px]"
          >
            <option value="Arial">Arial</option>
            <option value="Verdana">Verdana</option>
            <option value="Georgia">Georgia</option>
            <option value="Times New Roman">Times New Roman</option>
            <option value="Courier New">Courier New</option>
            <option value="Roboto">Roboto</option>
            <option value="sans-serif">Sans-serif</option>
            <option value="serif">Serif</option>
            <option value="Open sans">Open sans</option>
          </select>
        </div>

        {/* Button Icon */}

        <div className="mr-3">
          <label className="block text-sm font-medium">Button Icon</label>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => {
              const file=e.target.files[0];
              if(file){
                const file = e.target.files[0];
                const reader = new FileReader();
                reader.onload = () =>
                  updateCustomization("buttonIcon", reader.result);
                reader.readAsDataURL(file);
              }else{
                console.error("No file selected or invalid file type");
              }
             
            }}
            className="mt-1 block w-full lg:w-[400px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Customize;
