import React, { useState, useEffect, useRef } from 'react';
import confetti from 'canvas-confetti';
import { Mail, Gift, Heart, Sparkles, ChevronDown, Award, Play } from 'lucide-react';
import bdayVideo from './media/bdayone.mp4';
import januImg from './media/jnu01.png';
import letterCoverImg from './media/lettercover.png';
import compLogoImg from './media/complogo.jpg';
import resumeImg from './media/resume.jpg';
import lunchboxImg from './media/lunchbox.jpg';
import mobileImg from './media/mobile.jpg';
import sofaImg from './media/sofa.jpg';
import busImg from './media/bus.jpg';
import teaImg from './media/tea.jpg';
import coconutImg from './media/tender coconut.jpg';
import whatsappImg from './media/whatsapp.jpg';
import fishImg from './media/fish.jpg';
import yellowHeartImg from './media/yellow.jpg';
import instaImg from './media/insta.jpg';
import dressImg from './media/dress.jpg';
import promise1Img from './media/promise01.jpg';
import promise2Img from './media/promise 02.jpg';
import promise3Img from './media/promise03.jpg';
import smileIconImg from './media/smile emoji.jpg';
import flipImg from './media/flip.jpg';
import './App.css';

export default function App() {
  const [stage, setStage] = useState('landing'); // 'landing' | 'count' | 'video' | 'main'
  const [count, setCount] = useState(0);
  const [isLetterOpen, setIsLetterOpen] = useState(false);
  const [isCandleBlown, setIsCandleBlown] = useState(false);
  const [isPromiseRevealed, setIsPromiseRevealed] = useState(false);
  const videoRef = useRef(null);

  // Counter logic: Counts 0 to 27 with accelerating speed
  useEffect(() => {
    if (stage !== 'count') return;

    if (count < 27) {
      // Speed increases as count approaches 27
      const delay = Math.max(30, 220 - count * 7);
      const timer = setTimeout(() => {
        setCount(prev => prev + 1);
      }, delay);
      return () => clearTimeout(timer);
    } else {
      // Reached 27! Trigger celebration confetti and switch to video modal
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 }
      });
      const waitTimer = setTimeout(() => {
        setStage('video');
      }, 700);
      return () => clearTimeout(waitTimer);
    }
  }, [count, stage]);

  useEffect(() => {
    if (stage === 'cake') {
      const blowTimer = setTimeout(() => {
        setIsCandleBlown(true);
        const moveTimer = setTimeout(() => {
          setStage('main');
        }, 1200);
        return () => clearTimeout(moveTimer);
      }, 3000);
      return () => clearTimeout(blowTimer);
    }
  }, [stage]);

  const handleEnterCake = () => {
    setStage('cake');
  };

  const handleRevealPromise = () => {
    setIsPromiseRevealed(true);
    // Grand celebration blast
    confetti({
      particleCount: 200,
      spread: 180,
      startVelocity: 60,
      origin: { y: 0.85 }
    });
  };

  const triggerSmallConfetti = () => {
    confetti({
      particleCount: 40,
      spread: 50,
      origin: { y: 0.7 }
    });
  };

  return (
    <div className="app-root">
      {/* 0. LANDING SCREEN */}
      {stage === 'landing' && (
        <div className="intro-screen">
          <p style={{ letterSpacing: '2px', textTransform: 'uppercase', color: '#b56576', fontWeight: 600 }}>
            A Special Day Awaits
          </p>
          <button
            onClick={() => setStage('count')}
            style={{
              marginTop: '24px', background: 'linear-gradient(135deg, #b56576, #e56b6f)',
              color: 'white', border: 'none', padding: '14px 36px', fontSize: '1.2rem',
              fontWeight: '600', borderRadius: '999px', cursor: 'pointer',
              boxShadow: '0 10px 25px rgba(181, 101, 118, 0.4)'
            }}
          >
            Begin Journey ✨
          </button>
        </div>
      )}

      {/* 1. COUNTDOWN SCREEN */}
      {stage === 'count' && (
        <div className="intro-screen">
          <p style={{ letterSpacing: '2px', textTransform: 'uppercase', color: '#b56576', fontWeight: 600 }}>
            Unlocking Chapter 27
          </p>
          <div className="counter-number">{count}</div>
          <p style={{ color: '#6d597a', marginTop: '12px' }}>
            Counting the beautiful years of your life...
          </p>
        </div>
      )}

      {/* 2. VIDEO MODAL REVEAL */}
      {stage === 'video' && (
        <div className="video-overlay">
          <div className="video-container">
            <video
              ref={(el) => {
                videoRef.current = el;
                if (el) {
                  el.play().catch(e => console.log('Autoplay blocked:', e));
                }
              }}
              autoPlay
              controls
              playsInline
              onEnded={handleEnterCake}
              poster="https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&w=800&q=80"
              src={bdayVideo}
            />
          </div>
        </div>
      )}

      {/* 2.5 CAKE SCREEN */}
      {stage === 'cake' && (
        <div className="cake-stage">
          <div className={`cake-container ${isCandleBlown ? 'blown-out' : ''}`}>
            <div className="css-flame"></div>
            <div className="smoke"></div>
            <div className="css-candle"></div>
            <div className="css-cake"></div>
          </div>
          <p className="cake-text">
            {isCandleBlown ? "Yay! Entering the Celebration ✨" : "Make a Celebration Wish... 💨"}
          </p>
        </div>
      )}

      {/* 3. MAIN CELEBRATION WEBSITE */}
      {stage === 'main' && (
        <main className="main-content">
          {/* HERO SECTION */}
          <section className="hero-section">
            {/* Flying butterflies */}
            <div className="butterflies-container">
              <div className="butterfly" style={{ '--path': 'fly1', '--dur': '20s', '--delay': '0s', '--top': '15%', '--size': '1.8rem', '--hue': '0deg', '--flip': '1' }}>🦋</div>
              <div className="butterfly" style={{ '--path': 'fly4', '--dur': '10s', '--delay': '1s', '--top': '65%', '--size': '1.4rem', '--hue': '290deg', '--flip': '-1' }}>🦋</div>
              <div className="butterfly" style={{ '--path': 'fly5', '--dur': '26s', '--delay': '3s', '--top': '85%', '--size': '2.4rem', '--hue': '110deg', '--flip': '1' }}>🦋</div>
              <div className="butterfly" style={{ '--path': 'fly6', '--dur': '9s', '--delay': '2s', '--top': '-10%', '--size': '1.6rem', '--hue': '45deg', '--flip': '-1' }}>🦋</div>
              <div className="butterfly" style={{ '--path': 'fly2', '--dur': '22s', '--delay': '4s', '--top': '25%', '--size': '1.5rem', '--hue': '150deg', '--flip': '1' }}>🦋</div>
              <div className="butterfly" style={{ '--path': 'fly4', '--dur': '14s', '--delay': '0.5s', '--top': '50%', '--size': '2rem', '--hue': '320deg', '--flip': '-1' }}>🦋</div>
            </div>

            <div className="hero-content">
              <div className="hero-text">
                <div className="date-badge">15th September 2026</div>
                <h1 className="bday-title">Happy  Birthday, Janu!</h1>
                <h2 className="bday-name">
                  Jancy Maria Johnson
                </h2>
                <p className="bday-subtitle">
                  To my dearest best friend—wishing you a year filled with warmth, endless laughter,
                  and boundless dreams coming true. You make the world infinitely brighter just by being you! 🌸
                </p>
                <a href="#letter" className="scroll-arrow" aria-label="Scroll Down">
                  <ChevronDown size={36} />
                </a>
              </div>
              <div className="hero-image-container">
                <img src={januImg} alt="Jancy" className="hero-image" />
              </div>
            </div>
          </section>

          {/* TAP TO OPEN LETTER SECTION */}
          <section id="letter" className="letter-section">
            <div
              className="envelope-wrapper glass-panel envelope-box"
              onClick={() => {
                setIsLetterOpen(true);
                triggerSmallConfetti();
              }}
            >
              <div style={{
                background: '#ffd6dc',
                borderRadius: '50%',
                padding: '16px',
                display: 'inline-flex'
              }}>
                <Mail size={40} color="#b56576" />
              </div>
              <h3 style={{ fontSize: '1.6rem', color: '#6d597a', fontWeight: 700 }}>
                You have a special letter 💌
              </h3>
              <p style={{ color: '#8d7b88', fontSize: '0.95rem' }}>
                Tap anywhere on this envelope to open and read
              </p>
            </div>

            {/* Letter Popup Modal */}
            {isLetterOpen && (
              <div className="letter-modal-backdrop" onClick={() => setIsLetterOpen(false)}>
                <div
                  className="letter-sheet"
                  onClick={(e) => e.stopPropagation()}
                  style={{
                    backgroundImage: `linear-gradient(rgba(255, 253, 250, 0.1), rgba(255, 253, 250, 0.1)), url(${letterCoverImg})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    borderLeft: 'none'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#f84147ff' }}>
                    <Heart size={20} fill="#e56b6f" />
                    <span style={{ fontWeight: 700, letterSpacing: '1px', textTransform: 'uppercase', fontSize: '0.85rem' }}>
                      To My Best Friend
                    </span>
                  </div>

                  <div className="letter-body">
                    Dear Janu,
                    {"\n\n"}
                    Happy Birthday! You are someone who brings joy to those around you with your sincere spirit, who pursues your aspirations, and who offers help to others whenever possible.
                    {"\n\n"}
                    In the 57 days since we first connected, I appreciate your unwavering support, your generosity, and the wonderful person you are. Your friendship has truly become a solid foundation for me.
                    {"\n\n"}
                    I have seen many of your faces. Your smiling face is the best of them all. May this year bring you all the peace, bright opportunities, love, and joy you deserve. You will always be in my prayers.
                  </div>

                  {/* SIGNATURE */}
                  <div className="signature-box" style={{ color: '#A31621', fontWeight: 'bold', textShadow: '1px 1px 3px rgba(255,255,255,0.6)' }}>
                    With lots of love,
                    <br />
                    Tigin Thomas
                    <span style={{
                      display: 'inline-block',
                      marginLeft: '12px',
                      filter: 'hue-rotate(70deg) saturate(1.2)',
                      transform: 'scale(1.15) translateY(2px)'
                    }}></span>
                  </div>

                  <div style={{ textAlign: 'center', marginTop: '24px' }}>
                    <button className="btn-close-letter" onClick={() => setIsLetterOpen(false)}>
                      Close Letter & Explore Gifts ↓
                    </button>
                  </div>
                </div>
              </div>
            )}
          </section>

          {/* MEMORY ICONS SHOWCASE */}
          <section className="memories-section">
            <div className="section-heading">
              <span style={{ textTransform: 'uppercase', letterSpacing: '2px', color: '#b56576', fontSize: '0.9rem', fontWeight: 700 }}>
                Everyday Moments
              </span>
              <h2>The Beautiful Chaos of You</h2>
            </div>

            <div className="floating-icons-container">
              <div className="floating-icon" style={{ left: '5%', top: '15%', "--delay": "0s", "--dur": "15s" }}><img src={resumeImg} alt="resume" className="mem-icon" /></div>
              <div className="floating-icon" style={{ left: '30%', top: '75%', "--delay": "2s", "--dur": "12s" }}><img src={lunchboxImg} alt="lunchbox" className="mem-icon" /></div>
              <div className="floating-icon" style={{ left: '15%', top: '45%', "--delay": "8s", "--dur": "18s" }}><img src={mobileImg} alt="mobile" className="mem-icon" /></div>
              <div className="floating-icon" style={{ left: '45%', top: '10%', "--delay": "1s", "--dur": "16s" }}><img src={sofaImg} alt="sofa" className="mem-icon" /></div>
              <div className="floating-icon" style={{ left: '80%', top: '30%', "--delay": "5s", "--dur": "22s" }}><img src={busImg} alt="bus" className="mem-icon" /></div>
              <div className="floating-icon" style={{ left: '65%', top: '65%', "--delay": "12s", "--dur": "14s" }}><img src={teaImg} alt="tea" className="mem-icon" /></div>
              <div className="floating-icon" style={{ left: '40%', top: '40%', "--delay": "7s", "--dur": "20s" }}><img src={coconutImg} alt="coconut" className="mem-icon" /></div>
              <div className="floating-icon" style={{ left: '85%', top: '75%', "--delay": "14s", "--dur": "17s" }}><img src={whatsappImg} alt="whatsapp" className="mem-icon" /></div>
              <div className="floating-icon" style={{ left: '75%', top: '15%', "--delay": "4s", "--dur": "19s" }}><img src={fishImg} alt="fish" className="mem-icon" /></div>
              <div className="floating-icon" style={{ left: '50%', top: '85%', "--delay": "9s", "--dur": "13s" }}><img src={yellowHeartImg} alt="yellow heart" className="mem-icon" /></div>
              <div className="floating-icon" style={{ left: '35%', top: '25%', "--delay": "10s", "--dur": "17s" }}><img src={instaImg} alt="instagram" className="mem-icon" /></div>
              <div className="floating-icon" style={{ left: '60%', top: '80%', "--delay": "6s", "--dur": "21s" }}><img src={dressImg} alt="dress" className="mem-icon" /></div>

              {/* Table with opposite chairs */}
              <div className="floating-icon" style={{ left: '20%', top: '80%', "--delay": "3s", "--dur": "21s" }}>
                <div className="table-chairs">
                  <div className="chair top-left"></div>
                  <div className="table-rect"></div>
                  <div className="chair bottom-right"></div>
                </div>
              </div>

              {/* Company Logo */}
              <div className="floating-icon" style={{ left: '55%', top: '55%', "--delay": "11s", "--dur": "19s" }}>
                <img src={compLogoImg} alt="Company Logo" className="comp-logo" />
              </div>
            </div>
          </section>

          {/* BALLOON TO PROMISE SECTION */}
          {!isPromiseRevealed ? (
            <div className="balloon-inline-stage" onClick={handleRevealPromise}>
              <div className="balloon inline-balloon">
                <div className="balloon-string"></div>
              </div>
              <p className="balloon-text-inline">Tap the balloon to unlock a special note! 🎈</p>
            </div>
          ) : (
            <section className="promise-section fade-in-section">
              <div className="promise-card glass-panel">
                <Sparkles size={36} color="#e56b6f" style={{ marginBottom: '12px' }} />
                <h3 className="promise-title">A Heartfelt Promise</h3>

                {/* Promise Memory Images row */}
                <div style={{ display: 'flex', justifyContent: 'center', gap: 'clamp(5px, 2vw, 15px)', marginBottom: '25px', flexWrap: 'wrap' }}>
                  <img src={promise1Img} alt="Promise Memory 1" style={{ width: 'clamp(80px, 25vw, 150px)', height: 'clamp(80px, 25vw, 150px)', objectFit: 'cover', borderRadius: '15px', border: '3px solid white', boxShadow: '0 5px 15px rgba(0,0,0,0.1)', transform: 'rotate(-4deg)' }} />
                  <img src={promise2Img} alt="Promise Memory 2" style={{ width: 'clamp(80px, 25vw, 150px)', height: 'clamp(80px, 25vw, 150px)', objectFit: 'cover', borderRadius: '15px', border: '3px solid white', boxShadow: '0 5px 15px rgba(0,0,0,0.1)', transform: 'rotate(2deg)' }} />
                  <img src={promise3Img} alt="Promise Memory 3" style={{ width: 'clamp(80px, 25vw, 150px)', height: 'clamp(80px, 25vw, 150px)', objectFit: 'cover', borderRadius: '15px', border: '3px solid white', boxShadow: '0 5px 15px rgba(0,0,0,0.1)', transform: 'rotate(-2deg)' }} />
                </div>
                <p className="promise-text">
                  I know there are many differences between us. Be it the way of speaking, be it entertainment, be it my area or anything. In these short days, you have become a good friend. If many things have happened and something has hurt you, I sincerely apologize.
                  <br /><br />
                  This too will pass and time will move forward, but I want this friendship to last forever.
                  <br /><br />
                  "No matter where life leads us, through every twist and turn of the road,
                  I promise you: I will stand as your faithful best friend forever."
                </p>
                <div style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
                  <span className="star-accent">✦</span>
                  <span style={{ fontWeight: 700, color: '#6d597a' }}>Always & Forever</span>
                  <span className="star-accent">✦</span>
                </div>
              </div>
            </section>
          )}

          {/* Final Global Quote outside the Promise Block */}
          <footer style={{ padding: '60px 20px', display: 'flex', justifyContent: 'center', position: 'relative', zIndex: 10 }}>
            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <img src={flipImg} alt="Flip Cover" />
                </div>
                <div className="flip-card-back">
                  <img src={smileIconImg} alt="Smile Emoji" style={{ width: '55px', height: '55px', objectFit: 'cover', borderRadius: '50%', boxShadow: '0 4px 10px rgba(0,0,0,0.1)', marginBottom: '20px' }} />
                  <p style={{ fontFamily: "'Dancing Script', cursive", fontSize: '2.2rem', color: '#b56576', textAlign: 'center', lineHeight: '1.4' }}>
                    Keep smile.... your smile is very Beautiful
                  </p>
                </div>
              </div>
            </div>
          </footer>
        </main>
      )}
    </div>
  );
}