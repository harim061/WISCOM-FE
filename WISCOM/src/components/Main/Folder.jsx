import * as F from './FolderStyle';
import FolderImg from './../../img/Main/Folder.svg';
import { motion } from 'framer-motion';

export default function Folder() {
  return (
    <>
      <F.FolderWrapper>
        <F.FolderGroup href="/map">
          <motion.div
            whileHover={{
              scale: 1.2,
              transition: { type: 'spring', stiffness: 400, damping: 10 },
            }}>
            <F.Folder src={FolderImg}></F.Folder>
          </motion.div>
          <F.FolderName>PROJECT</F.FolderName>
        </F.FolderGroup>

        <F.FolderGroup href="https://pf.kakao.com/_wymuG/chat" target="_blank">
          <motion.div
            whileHover={{
              scale: 1.2,
              transition: { type: 'spring', stiffness: 400, damping: 10 },
            }}>
            <F.Folder src={FolderImg}></F.Folder>
          </motion.div>
          <F.FolderName>CHAT</F.FolderName>
        </F.FolderGroup>
        <F.FolderGroup href="/guestbook">
          <motion.div
            whileHover={{
              scale: 1.2,
              transition: { type: 'spring', stiffness: 400, damping: 10 },
            }}>
            <F.Folder src={FolderImg}></F.Folder>
          </motion.div>
          <F.FolderName>GUESTBOOK</F.FolderName>
        </F.FolderGroup>
        <F.FolderGroup href="https://www.duksung.ac.kr/computer/main.do" target="_blank">
          <motion.div
            whileHover={{
              scale: 1.2,
              transition: { type: 'spring', stiffness: 400, damping: 10 },
            }}>
            <F.Folder src={FolderImg}></F.Folder>
          </motion.div>
          <F.FolderName>CSE</F.FolderName>
        </F.FolderGroup>
        <F.FolderGroup href="/developer">
          <motion.div
            whileHover={{
              scale: 1.2,
              transition: { type: 'spring', stiffness: 400, damping: 10 },
            }}>
            <F.Folder src={FolderImg}></F.Folder>
          </motion.div>
          <F.FolderName>DEVELOPER</F.FolderName>
        </F.FolderGroup>
      </F.FolderWrapper>
      <F.ClickInfo>Click The Folder</F.ClickInfo>
    </>
  );
}
