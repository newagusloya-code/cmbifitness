import React, { useEffect, useState } from 'react';
import { WgerAuthConfig, getStoredAuthConfig, saveAuthConfig } from '../services/wgerApi';

interface AuthSettingsModalProps {
	isOpen: boolean;
	onClose: () => void;
	onConfigUpdated: () => void;
}

export const AuthSettingsModal: React.FC<AuthSettingsModalProps> = ({ isOpen, onClose, onConfigUpdated }) => {
	const [config, setConfig] = useState<WgerAuthConfig>(getStoredAuthConfig());

	useEffect(() => {
		if (isOpen) setConfig(getStoredAuthConfig());
	}, [isOpen]);

	if (!isOpen) return null;

	const save = () => {
		saveAuthConfig(config);
		onConfigUpdated();
		onClose();
	};

	return (
		<div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/40 p-4" role="dialog" aria-modal="true" aria-label="Configuración de Sistema">
			<div className="w-full max-w-md rounded-3xl bg-white p-6 shadow-2xl overflow-y-auto max-h-[90vh]">
				<div className="flex items-center justify-between mb-4">
					<h2 className="text-xl font-black text-slate-900 flex items-center gap-2">⚙️ Configuración</h2>
					<button onClick={onClose} className="text-xl text-slate-400 font-bold" aria-label="Cerrar">×</button>
				</div>
				
				<div className="space-y-6">
					{/* WGER Auth */}
					<div className="border border-slate-100 p-4 rounded-2xl bg-slate-50">
						<h3 className="text-xs font-black uppercase text-slate-500 mb-3 tracking-widest">Sincronización (wger)</h3>
						<label className="block text-xs font-bold text-slate-700">
							Modo de autenticación
							<select value={config.authType} onChange={event => setConfig({ ...config, authType: event.target.value as WgerAuthConfig['authType'] })} className="mt-2 w-full rounded-xl border border-slate-200 p-3 text-sm font-medium">
								<option value="anonymous">Local / Anónimo</option>
								<option value="token">API Token (Pro)</option>
								<option value="jwt">JWT Auth</option>
							</select>
						</label>
						{config.authType === 'token' && <input value={config.permanentToken || ''} onChange={event => setConfig({ ...config, permanentToken: event.target.value })} placeholder="Ingresar token permanente..." className="mt-4 w-full rounded-xl border border-slate-200 p-3 text-sm" type="password" />}
						{config.authType === 'jwt' && <input value={config.accessToken || ''} onChange={event => setConfig({ ...config, accessToken: event.target.value })} placeholder="Ingresar access token..." className="mt-4 w-full rounded-xl border border-slate-200 p-3 text-sm" type="password" />}
					</div>

					{/* App Configuration */}
					<div className="border border-slate-100 p-4 rounded-2xl">
						<h3 className="text-xs font-black uppercase text-slate-500 mb-3 tracking-widest">Ajustes Generales</h3>
						<div className="space-y-2">
							<button className="w-full text-left px-4 py-3 rounded-xl bg-slate-50 hover:bg-slate-100 text-sm font-bold text-slate-700 transition-colors flex items-center justify-between">
								<span>🖼️ Modificar Assets Visuales</span>
								<span className="text-slate-400">→</span>
							</button>
							<button className="w-full text-left px-4 py-3 rounded-xl bg-slate-50 hover:bg-slate-100 text-sm font-bold text-slate-700 transition-colors flex items-center justify-between">
								<span>🏋️ Agregar Ejercicios Custom</span>
								<span className="text-slate-400">→</span>
							</button>
							<button 
								onClick={() => window.open(`https://wa.me/?text=${encodeURIComponent('Hola! Mira mi progreso clínico y mi perfil deportivo de CMBI Fitness.')}`, '_blank')}
								className="w-full text-left px-4 py-3 rounded-xl bg-[#25D366]/10 hover:bg-[#25D366]/20 text-[#128C7E] text-sm font-black transition-colors flex items-center justify-between"
							>
								<span>📱 Compartir Perfil WhatsApp</span>
								<span>↗</span>
							</button>
						</div>
					</div>
				</div>

				<div className="mt-6 flex justify-end gap-3 pt-4 border-t border-slate-100">
					<button onClick={onClose} className="rounded-xl px-4 py-2 text-xs font-bold text-slate-500 bg-slate-50 hover:bg-slate-100">Cerrar</button>
					<button onClick={save} className="rounded-xl bg-blue-600 px-6 py-2 text-xs font-black text-white hover:bg-blue-700 shadow-md shadow-blue-200">Guardar Cambios</button>
				</div>
			</div>
		</div>
	);
};
