import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const alt = 'Visa-Service Qazaqstan - Premium Visa Advisory';
export const size = {
    width: 1200,
    height: 630,
};
export const contentType = 'image/png';

export default async function Image() {
    return new ImageResponse(
        (
            <div
                style={{
                    background: 'linear-gradient(135deg, #181611 0%, #2c281f 100%)',
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                }}
            >
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '40px' }}>
                    <div style={{
                        width: '80px',
                        height: '80px',
                        borderRadius: '50%',
                        background: 'linear-gradient(135deg, #eebd2b 0%, #d4a720 100%)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '40px',
                        fontWeight: 'bold',
                        color: '#181611',
                        marginRight: '20px'
                    }}>
                        V
                    </div>
                    <div style={{ fontSize: '48px', fontWeight: 'bold', color: '#f8f7f6' }}>
                        Visa-Service.kz
                    </div>
                </div>

                <div style={{
                    fontSize: '64px',
                    fontWeight: 'bold',
                    textAlign: 'center',
                    marginBottom: '20px',
                    background: 'linear-gradient(90deg, #eebd2b, #f8f7f6)',
                    backgroundClip: 'text',
                    color: 'transparent',
                    maxWidth: '1000px',
                    lineHeight: 1.2
                }}>
                    Premium Visa Advisory
                </div>

                <div style={{ fontSize: '32px', color: '#9ca3af', marginBottom: '40px' }}>
                    US • Schengen • UK • Complex Cases
                </div>

                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: '#eebd2b',
                    color: '#181611',
                    padding: '10px 30px',
                    borderRadius: '50px',
                    fontSize: '24px',
                    fontWeight: 'bold'
                }}>
                    98% Approval Rate
                </div>
            </div>
        ),
        {
            ...size,
        }
    );
}
