import _0x45a682 from'@whiskeysockets/baileys';let pajak=0x0,handler=async(_0x508d19,{conn:_0x58ed3e,text:_0x1d272b})=>{let _0x50ec1f;if(_0x508d19['isGroup'])_0x50ec1f=_0x508d19['mentionedJid'][0x0];else _0x50ec1f=_0x508d19['chat'];if(!_0x50ec1f)throw'[❗]\x20tag\x20a\x20user';let _0x47d083=_0x1d272b['replace']('@'+_0x50ec1f['split']`@`[0x0],'')['trim']();if(!_0x47d083)throw'[❗]\x20enter\x20the\x20amount\x20you\x20want\x20to\x20add';if(isNaN(_0x47d083))throw'[❗]\x20symbols\x20not\x20added\x20only\x20with\x20numbers!';let _0x26252c=parseInt(_0x47d083),_0x44c182=_0x26252c,_0x4e5ba8=Math['ceil'](_0x26252c*pajak);_0x44c182+=_0x4e5ba8;if(_0x44c182<0x1)throw'[❗]the\x20minimum\x20number\x20to\x20add\x20is\x201';let _0x57b551=global['db']['data']['users'];_0x57b551[_0x50ec1f]['limit']+=_0x26252c,_0x508d19['reply']('≡\x20💎\x20he\x20added\x0a┌──────────────\x0a▢\x20total\x20\x20'+_0x26252c+'\x0a└──────────────');};handler['command']=['añadirdiamantes','addd','dard','dardiamantes'],handler['rowner']=!![],handler['register']=!![];export default handler;