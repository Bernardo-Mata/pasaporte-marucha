import { ArrowRight, Fingerprint, ShieldCheck } from 'lucide-react'

function App() {
  return (
    <main className="min-h-screen overflow-x-clip bg-[#0e0e0e] px-4 py-6 text-[#ece5d3] sm:px-8 sm:py-10">
      <div className="relative mx-auto w-full max-w-[680px]">
        <div className="pointer-events-none absolute left-1/2 top-[-140px] h-[260px] w-[640px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,_rgba(141,237,236,0.12)_0%,_rgba(14,14,14,0)_65%)]" />

        <header className="relative z-10 pl-3">
          <h1 className="font-['Epilogue'] text-[58px] font-[800] italic uppercase leading-[0.95] tracking-[-0.02em] text-[#f7e28f] sm:text-[88px]">
            The Curated
            <br />
            Expedition
          </h1>
          <p className="mt-6 font-['Space_Grotesk'] text-[13px] uppercase tracking-[0.38em] text-[#5ea8b2] sm:text-[20px]">
            Authenticating Resident Voyager
          </p>
        </header>

        <aside className="absolute left-[-42px] top-[300px] z-20 hidden h-[188px] w-[188px] rounded-full bg-[rgba(40,63,70,0.22)] shadow-[0_0_0_2px_rgba(94,168,178,0.22),0_20px_52px_rgba(6,12,13,0.5)] backdrop-blur-sm sm:block">
          <div className="absolute inset-[12px] rounded-full border-[7px] border-dashed border-[#5ea8b2]/65" />
          <div className="absolute inset-[28px] rounded-full bg-[linear-gradient(160deg,#22343a,#101719)] p-4 text-center shadow-[inset_0_0_26px_rgba(141,237,236,0.14)]">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#8dedec]/18">
              <ShieldCheck size={28} className="text-[#8dedec]" />
            </div>
            <p className="mt-4 font-['Space_Grotesk'] text-[22px] uppercase tracking-[0.06em] text-[#82d8df]">
              Approved
            </p>
          </div>
        </aside>

        <section className="relative mt-14 rounded-[48px] bg-[#181717] px-6 pb-11 pt-11 shadow-[0_36px_96px_rgba(0,0,0,0.62),inset_0_1px_0_rgba(255,255,255,0.02)] sm:px-14 sm:pt-14">
          <form className="space-y-8" autoComplete="off">
            <div className="space-y-4">
              <label
                htmlFor="email"
                className="block font-['Inter'] text-[28px] font-semibold text-[#d5ccb5] sm:text-[42px]"
              >
                Journal Reference (Email)
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="voyager@curated.chronicle"
                className="h-[95px] w-full rounded-[18px] border-none bg-[#373737] px-7 font-['Inter'] text-[32px] text-[#9f9b90] placeholder:text-[#7a766b] shadow-[inset_0_2px_12px_rgba(0,0,0,0.35)] outline-none transition-all duration-300 focus:bg-[#3e3e3e] focus:text-[#d4d0c2]"
              />
            </div>

            <div className="space-y-4">
              <label
                htmlFor="password"
                className="block font-['Inter'] text-[28px] font-semibold text-[#d5ccb5] sm:text-[42px]"
              >
                Security Cipher (Password)
              </label>
              <input
                id="password"
                name="password"
                type="password"
                placeholder="•••••••••••"
                className="h-[95px] w-full rounded-[18px] border-none bg-[#373737] px-7 font-['Inter'] text-[32px] tracking-[0.18em] text-[#9f9b90] placeholder:text-[#7a766b] shadow-[inset_0_2px_12px_rgba(0,0,0,0.35)] outline-none transition-all duration-300 focus:bg-[#3e3e3e] focus:text-[#d4d0c2]"
              />
            </div>

            <button
              type="button"
              className="group mt-4 flex h-[102px] w-full items-center justify-center gap-5 rounded-full bg-[linear-gradient(92deg,#ffe792_0%,#efc900_100%)] font-['Inter'] text-[40px] font-semibold text-[#2f2600] shadow-[0_14px_36px_rgba(239,201,0,0.24)] transition-all duration-300 hover:scale-[1.01] hover:shadow-[0_24px_52px_rgba(239,201,0,0.3)]"
            >
              Access your Journal
              <ArrowRight
                size={40}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </button>

            <div className="flex items-center gap-6 pt-1">
              <div className="h-px flex-1 bg-[linear-gradient(to_right,transparent,rgba(255,231,146,0.16),transparent)]" />
              <p className="font-['Space_Grotesk'] text-[20px] uppercase tracking-[0.25em] text-[#595646]">
                Identity Verification
              </p>
              <div className="h-px flex-1 bg-[linear-gradient(to_right,transparent,rgba(255,231,146,0.16),transparent)]" />
            </div>

            <button
              type="button"
              className="group flex h-[102px] w-full items-center justify-center gap-4 rounded-full bg-[linear-gradient(110deg,rgba(58,58,58,0.85),rgba(42,42,42,0.88))] font-['Inter'] text-[46px] font-medium text-[#8dedec] shadow-[0_22px_50px_rgba(0,0,0,0.34),inset_0_1px_0_rgba(255,255,255,0.06)] backdrop-blur-sm transition-all duration-300 hover:scale-[1.01] hover:text-[#9ff5f4]"
            >
              <Fingerprint
                size={40}
                className="transition-transform duration-300 group-hover:scale-105"
              />
              Connect your Identity
            </button>

            <div className="flex items-center justify-between pt-3 font-['Space_Grotesk'] text-[29px] uppercase tracking-[0.1em]">
              <button type="button" className="text-[#cec7b0] transition-colors hover:text-[#f1e4bf]">
                Recover Access
              </button>
              <button type="button" className="text-[#ecd671] transition-colors hover:text-[#ffe792]">
                Apply for Passage
              </button>
            </div>
          </form>
        </section>

        <footer className="mt-16 grid grid-cols-[1fr_auto_1fr] items-center gap-4 rounded-[32px] bg-[linear-gradient(180deg,rgba(24,23,23,0.45),rgba(11,11,11,0.2))] p-6 font-['Space_Grotesk'] sm:px-12 sm:py-8">
          <div className="text-left">
            <p className="text-[11px] uppercase tracking-[0.1em] text-[#565444] sm:text-[16px]">Terminal ID</p>
            <p className="text-[17px] font-semibold tracking-[0.03em] text-[#67d5de] sm:text-[34px]">VOY-772-B</p>
          </div>
          <div className="h-[52px] w-px bg-[linear-gradient(to_bottom,transparent,rgba(141,237,236,0.25),transparent)] sm:h-[72px]" />
          <div className="text-left">
            <p className="text-[11px] uppercase tracking-[0.1em] text-[#565444] sm:text-[16px]">Encryption</p>
            <p className="text-[17px] font-semibold tracking-[0.03em] text-[#f4f1e8] sm:text-[34px]">AES-256-BIT</p>
          </div>
          <p className="col-span-3 pt-2 text-center text-[11px] uppercase tracking-[0.07em] text-[#565444] sm:text-[15px]">
            © 2024 The Curated Chronicle · EST. Global Protocol
          </p>
        </footer>
      </div>
    </main>
  )
}

export default App
