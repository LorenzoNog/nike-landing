import React, { useState } from "react";
import Tooltip from "./Tooltip";
import { motion } from "framer-motion";

const ChooseYourLook = () => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <section className="flex flex-col gap-5 px-5 pt-10 pb-5">
      <h2 className="font-medium text-2xl">Elegí tu look Nike</h2>
      <div className="flex flex-row gap-3">
        <div
          className="relative"
          onMouseEnter={() => setIsVisible(true)}
          onMouseLeave={() => setIsVisible(false)}
        >
          <img src="https://nikearprod.vtexassets.com/assets/vtex.file-manager-graphql/images/ea98172f-66fc-4a57-bed1-686592928c24___78239737552e82ce9825c330b948b91e.jpg" />
          {isVisible && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 0.5,
                delay: 0.1,
                ease: [0, 0.71, 0.2, 1.01],
              }}
            >
              <Tooltip
                title={"Nike DRI-FIT"}
                price={"$ 27.499"}
                styles={
                  "flex flex-col gap-1 rounded-xl w-[120px] bg-black opacity-100 p-2 absolute bottom-[70%] left-[13%]"
                }
              />
              <Tooltip
                title={"Nike DRI-FIT"}
                price={"$ 28.999"}
                styles={
                  "flex flex-col gap-1 rounded-xl w-[120px] bg-black opacity-100 p-2 absolute bottom-[70%] left-[60%]"
                }
              />
              <Tooltip
                title={"Nike Alate Co"}
                price={"$ 29.999"}
                styles={
                  "flex flex-col gap-1 rounded-xl w-[120px] bg-black opacity-100 p-2 absolute bottom-[40%] left-[25%]"
                }
              />
              <Tooltip
                title={"Nike Zenvy"}
                price={"$ 57.999"}
                styles={
                  "flex flex-col gap-1 rounded-xl w-[120px] bg-black opacity-100 p-2 absolute bottom-[40%] left-[60%]"
                }
              />
              <Tooltip
                title={"Nike Quest 5"}
                price={"$ 53.999"}
                styles={
                  "flex flex-col gap-1 rounded-xl w-[120px] bg-black opacity-100 p-2 absolute bottom-[20%] left-[17%]"
                }
              />
            </motion.div>
          )}
        </div>
        <div
          className="relative"
          onMouseEnter={() => setIsVisible(true)}
          onMouseLeave={() => setIsVisible(false)}
        >
          <img src="https://nikearprod.vtexassets.com/assets/vtex.file-manager-graphql/images/8794b883-2a2e-41c5-9578-bd5a47c9d40e___46782d0438e270d4efc6f031402ad3f4.jpg" />
          {isVisible && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 0.5,
                delay: 0.1,
                ease: [0, 0.71, 0.2, 1.01],
              }}
            >
              <Tooltip
                title={"Nike SB"}
                price={"$ 78.299"}
                styles={
                  "flex flex-col gap-1 rounded-xl w-[120px] bg-black opacity-100 p-2 absolute bottom-[70%] left-[18%]"
                }
              />
              <Tooltip
                title={"Nike Air"}
                price={"$ 60.499"}
                styles={
                  "flex flex-col gap-1 rounded-xl w-[120px] bg-black opacity-100 p-2 absolute bottom-[70%] left-[60%]"
                }
              />
              <Tooltip
                title={"Nike Sport"}
                price={"$ 16.999"}
                styles={
                  "flex flex-col gap-1 rounded-xl w-[120px] bg-black opacity-100 p-2 absolute bottom-[40%] left-[10%]"
                }
              />
              <Tooltip
                title={"Nike Therma-"}
                price={"$ 37.999"}
                styles={
                  "flex flex-col gap-1 rounded-xl w-[120px] bg-black opacity-100 p-2 absolute bottom-[40%] left-[60%]"
                }
              />
              <Tooltip
                title={"Nike Air Max"}
                price={"$ 117.999"}
                styles={
                  "flex flex-col gap-1 rounded-xl w-[120px] bg-black opacity-100 p-2 absolute bottom-[10%] left-[25%]"
                }
              />
            </motion.div>
          )}
        </div>
        <div
          className="relative"
          onMouseEnter={() => setIsVisible(true)}
          onMouseLeave={() => setIsVisible(false)}
        >
          <img src="https://nikearprod.vtexassets.com/assets/vtex.file-manager-graphql/images/ad12dc7e-ae7b-4b39-9a0b-604682222b7b___1f082dd83e40f5bcc72de8c5db7d6aca.jpg" />
          {isVisible && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 0.5,
                delay: 0.1,
                ease: [0, 0.71, 0.2, 1.01],
              }}
            >
              <Tooltip
                title={"Nike Life"}
                price={"$ 113.499"}
                styles={
                  "flex flex-col gap-1 rounded-xl w-[120px] bg-black opacity-100 p-2 absolute bottom-[50%] left-[15%]"
                }
              />
              <Tooltip
                title={"Jordan 23 EN"}
                price={"$ 28.999"}
                styles={
                  "flex flex-col gap-1 rounded-xl w-[120px] bg-black opacity-100 p-2 absolute bottom-[70%] left-[57%]"
                }
              />
              <Tooltip
                title={"Nike SB Ke"}
                price={"$ 57.999"}
                styles={
                  "flex flex-col gap-1 rounded-xl w-[120px] bg-black opacity-100 p-2 absolute bottom-[20%] left-[58%]"
                }
              />
              <Tooltip
                title={"Nike Air T"}
                price={"$ 97.999"}
                styles={
                  "flex flex-col gap-1 rounded-xl w-[120px] bg-black opacity-100 p-2 absolute bottom-[10%] left-[15%]"
                }
              />
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ChooseYourLook;
