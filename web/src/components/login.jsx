import { ArrowRight, Fingerprint, ShieldCheck } from 'lucide-react'

function Login() {
  return (
    <main className="min-h-screen overflow-x-clip bg-[#0e0e0e] px-4 py-6 text-[#ece5d3] sm:px-6 sm:py-8 md:px-10 md:py-10">
      <div className="relative mx-auto w-full max-w-[760px]">
        <div className="pointer-events-none absolute left-1/2 top-[-120px] h-[220px] w-[560px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,_rgba(141,237,236,0.12)_0%,_rgba(14,14,14,0)_68%)]" />

        <header className="relative z-10 pl-1 sm:pl-2">
          <h1 className="font-['Epilogue'] text-[54px] font-extrabold italic uppercase leading-[0.92] tracking-[-0.025em] text-[#f7e28f] sm:text-[68px] md:text-[86px]">
            The Curated
            <br />
            Expedition
          </h1>

          <p className="mt-4 font-['Space_Grotesk'] text-[11px] uppercase tracking-[0.34em] text-[#5ea8b2] sm:mt-5 sm:text-[13px] md:text-[18px]">
            Authenticating Resident Voyager
          </p>
        </header>

        <aside className="absolute left-[-20px] top-[220px] z-20 h-[96px] w-[96px] rounded-full bg-[rgba(40,63,70,0.22)] shadow-[0_0_0_2px_rgba(94,168,178,0.22),0_18px_44px_rgba(6,12,13,0.5)] backdrop-blur-sm sm:left-[-28px] sm:top-[250px] sm:h-[122px] sm:w-[122px] md:left-[-42px] md:top-[286px] md:h-[168px] md:w-[168px]">
          <div className="absolute inset-[8px] rounded-full border-[4px] border-dashed border-[#5ea8b2]/65 sm:inset-[10px] sm:border-[5px] md:inset-[12px] md:border-[6px]" />
          <div className="absolute inset-[18px] rounded-full bg-[linear-gradient(160deg,#22343a,#101719)] p-2 text-center shadow-[inset_0_0_22px_rgba(141,237,236,0.14)] sm:inset-[22px] md:inset-[26px]">
            <div className="mx-auto flex h-8 w-8 items-center justify-center rounded-full bg-[#8dedec]/18 sm:h-9 sm:w-9 md:h-11 md:w-11">
              <ShieldCheck size={20} className="text-[#8dedec] md:h-6 md:w-6" />
            </div>
            <p className="mt-2 font-['Space_Grotesk'] text-[10px] uppercase tracking-[0.04em] text-[#82d8df] sm:text-[12px] md:text-[16px]">
              Approved
            </p>
          </div>
        </aside>

        <section className="relative mt-10 rounded-[34px] bg-[#181717] px-4 pb-8 pt-7 shadow-[0_30px_80px_rgba(0,0,0,0.62),inset_0_1px_0_rgba(255,255,255,0.02)] sm:mt-12 sm:rounded-[40px] sm:px-6 sm:pb-10 sm:pt-10 md:mt-14 md:rounded-[48px] md:px-12 md:pb-12 md:pt-12">
          <form className="space-y-6 sm:space-y-7 md:space-y-8" autoComplete="off">
            <div className="space-y-2 sm:space-y-3">
              <label
                htmlFor="email"
                className="block font-['Inter'] text-[20px] font-semibold text-[#d5ccb5] sm:text-[24px] md:text-[40px]"
              >
                Journal Reference (Email)
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="voyager@curated.chronicle"
                className="h-14 w-full rounded-2xl border-none bg-[#373737] px-5 font-['Inter'] text-[22px] text-[#9f9b90] placeholder:text-[#7a766b] shadow-[inset_0_2px_12px_rgba(0,0,0,0.35)] outline-none transition-all duration-300 focus:bg-[#3e3e3e] focus:text-[#d4d0c2] sm:h-16 sm:text-[24px] md:h-[88px] md:rounded-[18px] md:px-7 md:text-[32px]"
              />
            </div>

            <div className="space-y-2 sm:space-y-3">
              <label
                htmlFor="password"
                className="block font-['Inter'] text-[20px] font-semibold text-[#d5ccb5] sm:text-[24px] md:text-[40px]"
              >
                Security Cipher (Password)
              </label>
              <input
                id="password"
                name="password"
                type="password"
                placeholder="•••••••••••"
                className="h-14 w-full rounded-2xl border-none bg-[#373737] px-5 font-['Inter'] text-[22px] tracking-[0.14em] text-[#9f9b90] placeholder:text-[#7a766b] shadow-[inset_0_2px_12px_rgba(0,0,0,0.35)] outline-none transition-all duration-300 focus:bg-[#3e3e3e] focus:text-[#d4d0c2] sm:h-16 sm:text-[24px] md:h-[88px] md:rounded-[18px] md:px-7 md:text-[32px]"
              />
            </div>

            <button
              type="button"
              className="group mt-1 flex h-14 w-full items-center justify-center gap-3 rounded-full bg-[linear-gradient(92deg,#ffe792_0%,#efc900_100%)] px-4 font-['Inter'] text-[20px] font-semibold text-[#2f2600] shadow-[0_12px_30px_rgba(239,201,0,0.24)] transition-all duration-300 hover:scale-[1.01] hover:shadow-[0_20px_44px_rgba(239,201,0,0.3)] sm:h-16 sm:text-[24px] md:h-[92px] md:gap-4 md:text-[44px]"
            >
              Access your Journal
              <ArrowRight
                size={28}
                className="transition-transform duration-300 group-hover:translate-x-1 md:h-10 md:w-10"
              />
            </button>

            <div className="flex items-center gap-4 pt-1 md:gap-6">
              <div className="h-px flex-1 bg-[linear-gradient(to_right,transparent,rgba(255,231,146,0.16),transparent)]" />
              <p className="whitespace-nowrap font-['Space_Grotesk'] text-[12px] uppercase tracking-[0.26em] text-[#595646] sm:text-[13px] md:text-[18px]">
                Identity Verification
              </p>
              <div className="h-px flex-1 bg-[linear-gradient(to_right,transparent,rgba(255,231,146,0.16),transparent)]" />
            </div>

            <button
              type="button"
              className="group flex h-14 w-full items-center justify-center gap-3 rounded-full bg-[linear-gradient(110deg,rgba(58,58,58,0.85),rgba(42,42,42,0.88))] px-4 font-['Inter'] text-[18px] font-medium text-[#8dedec] shadow-[0_20px_46px_rgba(0,0,0,0.34),inset_0_1px_0_rgba(255,255,255,0.06)] backdrop-blur-sm transition-all duration-300 hover:scale-[1.01] hover:text-[#9ff5f4] sm:h-16 sm:text-[26px] md:h-[92px] md:gap-4 md:text-[44px]"
            >
              <Fingerprint
                size={24}
                className="transition-transform duration-300 group-hover:scale-105 md:h-9 md:w-9"
              />
              Connect your Identity
            </button>

            <div className="flex items-center justify-between pt-1 font-['Space_Grotesk'] text-[16px] uppercase tracking-[0.12em] sm:text-[18px] md:pt-2 md:text-[28px]">
              <button type="button" className="text-[#cec7b0] transition-colors hover:text-[#f1e4bf]">
                Recover Access
              </button>
              <button type="button" className="text-[#ecd671] transition-colors hover:text-[#ffe792]">
                Apply for Passage
              </button>
            </div>
          </form>
        </section>

        <footer className="mt-10 rounded-[28px] bg-[linear-gradient(180deg,rgba(24,23,23,0.45),rgba(11,11,11,0.2))] p-4 font-['Space_Grotesk'] sm:mt-12 sm:p-6 md:mt-14 md:rounded-[32px] md:px-10 md:py-8">
          <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-3 md:gap-4">
            <div className="text-left">
              <p className="text-[10px] uppercase tracking-[0.1em] text-[#565444] sm:text-[11px] md:text-[14px]">
                Terminal ID
              </p>
              <p className="text-[20px] font-semibold tracking-[0.03em] text-[#67d5de] sm:text-[24px] md:text-[34px]">
                VOY-772-B
              </p>
            </div>

            <div className="h-[44px] w-px bg-[linear-gradient(to_bottom,transparent,rgba(141,237,236,0.25),transparent)] sm:h-[52px] md:h-[70px]" />

            <div className="text-left">
              <p className="text-[10px] uppercase tracking-[0.1em] text-[#565444] sm:text-[11px] md:text-[14px]">
                Encryption
              </p>
              <p className="text-[20px] font-semibold tracking-[0.03em] text-[#f4f1e8] sm:text-[24px] md:text-[34px]">
                AES-256-BIT
              </p>
            </div>
          </div>

          <p className="pt-3 text-center text-[10px] uppercase tracking-[0.08em] text-[#565444] sm:text-[11px] md:pt-4 md:text-[14px]">
            © creado en 2026
            <br className="sm:hidden" />
            <span className="hidden sm:inline"> · </span>
            EST. Global Protocol
          </p>
        </footer>
      </div>
    </main>
  )
}

export default Login