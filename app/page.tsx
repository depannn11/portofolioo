'use client';

import { useState } from 'react';
import { Github, Send, Mail, ExternalLink } from 'lucide-react';

type ModalType = 'privacy' | 'terms' | null;

const content = {
  privacy: {
    title: 'Kebijakan Privasi',
    body: 'Privasi Anda adalah prioritas utama kami. Layanan ini tidak mengumpulkan atau menyimpan data pribadi pengunjung secara permanen. Semua data yang diproses melalui alat kami bersifat sementara dan hanya digunakan untuk menjalankan fungsi teknis aplikasi secara real-time.',
  },
  terms: {
    title: 'Ketentuan Layanan',
    body: 'Dengan menggunakan layanan ini, Anda setuju untuk menggunakan project kami secara bijak dan tidak menyalahgunakan sistem (seperti tindakan spamming API). Project ini dikembangkan oleh Defandryan Kenzo D untuk tujuan edukasi dan penggunaan publik yang bermanfaat.',
  },
};

export default function Portfolio() {
  const [modal, setModal] = useState<ModalType>(null);

  const openModal = (type: ModalType) => setModal(type);
  const closeModal = () => setModal(null);

  return (
    <div className="min-h-screen">
      <div style={{ maxWidth: '900px', width: '100%', marginTop: '40px' }} className="mx-auto">
        <div className="bento-grid">
          {/* Profile Card */}
          <div className="card profile-card">
            <img src="https://files.catbox.moe/act3hl.png" alt="Kenzo" />
            <div>
              <span className="tag">Backend Developer</span>
              <h1>Defandryan Kenzo D</h1>
            </div>
          </div>

          {/* Age Card */}
          <div className="card info-card">
            <span>Age</span>
            <p>15 Years</p>
          </div>

          {/* Experience Card */}
          <div className="card info-card">
            <span>Experience</span>
            <p>Since 2024</p>
          </div>

          {/* Featured Project Card */}
          <div className="card project-card">
            <div>
              <span className="tag">Featured Project</span>
              <h2>SSSTikTok Downloader</h2>
              <p style={{ color: 'var(--text-light)', fontSize: '14px' }}>
                Download TikTok videos without watermark. Built with high-performance JavaScript logic.
              </p>
            </div>
            <a href="https://ssstiktok.soraa.my.id" target="_blank" rel="noopener noreferrer" className="project-link">
              Open Project <ExternalLink size={14} style={{ marginLeft: '4px' }} />
            </a>
          </div>

          {/* Technical Stack Card */}
          <div className="card info-card" style={{ gridColumn: 'span 2' }}>
            <span>Technical Stack</span>
            <p style={{ fontSize: '16px', marginTop: '5px' }}>NodeJS, JavaScript, HTML, CSS, Next.js</p>
          </div>

          {/* Activities Card */}
          <div className="card info-card">
            <span>Activities</span>
            <p style={{ fontSize: '15px' }}>ngoding dan maen game</p>
          </div>

          {/* Main Skills Card */}
          <div className="card skill-card" style={{ gridColumn: 'span 2', gridRow: 'span 2' }}>
            <span className="tag">Skills</span>
            <h2 style={{ fontSize: '20px', marginBottom: '12px', marginTop: '8px' }}>Core Competencies</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <div className="skill-item">
                <span style={{ fontWeight: '600', fontSize: '13px' }}>Backend Development</span>
                <p style={{ fontSize: '12px', color: 'var(--text-light)' }}>Node.js, API Design, Database</p>
              </div>
              <div className="skill-item">
                <span style={{ fontWeight: '600', fontSize: '13px' }}>Frontend</span>
                <p style={{ fontSize: '12px', color: 'var(--text-light)' }}>HTML, CSS, JavaScript, React</p>
              </div>
              <div className="skill-item">
                <span style={{ fontWeight: '600', fontSize: '13px' }}>Tools & Frameworks</span>
                <p style={{ fontSize: '12px', color: 'var(--text-light)' }}>Next.js, Git, VS Code</p>
              </div>
            </div>
          </div>

          {/* Projects Overview Card */}
          <div className="card info-card">
            <span>Total Projects</span>
            <p style={{ fontSize: '28px', fontWeight: '600' }}>5+</p>
          </div>

          {/* Learning Card */}
          <div className="card info-card">
            <span>Currently Learning</span>
            <p style={{ fontSize: '14px' }}>Advanced Backend Patterns</p>
          </div>

          {/* Availability Card */}
          <div className="card info-card">
            <span>Status</span>
            <p style={{ fontSize: '14px', color: 'var(--google-blue)' }}>Open to Collaboration</p>
          </div>

          {/* Social Links */}
          <div className="link-group" style={{ display: 'flex', gap: '12px' }}>
            <a href="https://github.com/depannn11" className="social-link" title="GitHub">
              <Github size={20} />
            </a>
            <a href="https://t.me/depstore11" className="social-link" title="Telegram">
              <Send size={20} />
            </a>
            <a href="mailto:defanaldrian1329@gmail.com" className="social-link" title="Email">
              <Mail size={20} />
            </a>
          </div>
        </div>

        {/* Footer */}
        <footer>
          <span>&copy; 2026 Defandryan Kenzo D</span>
          <div>
            <button onClick={() => openModal('privacy')} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'inherit' }}>
              Privacy
            </button>
            <button onClick={() => openModal('terms')} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'inherit', marginLeft: '10px' }}>
              Terms
            </button>
          </div>
        </footer>
      </div>

      {/* Modal */}
      <div className={`modal-overlay ${modal ? 'active' : ''}`} onClick={closeModal}>
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
          {modal && (
            <>
              <div className="modal-header">{content[modal].title}</div>
              <div className="modal-body">{content[modal].body}</div>
              <button className="modal-btn" onClick={closeModal}>
                Sip, Paham
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
