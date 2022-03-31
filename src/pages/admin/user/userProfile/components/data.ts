type InfoList = Record<string, string | undefined>;

export const momsProfile = (user?: IMoms): InfoList => ({
  'Nomor Telepon': user?.username ?? '-',
  'Tempat Lahir': user?.profile?.pob ?? '-',
  'Tanggal Lahir': `${user?.profile?.dob ?? '-'} (${user?.profile?.age ?? '0'} tahun)`,
  Alamat: user?.profile?.address ?? '-',
  Domisili: user?.profile?.domicile ?? '-',
  Agama: user?.profile?.religionText ?? '-',
  'Golongan Darah': user?.profile?.bloodType ?? '-',
  'Status Pernikahan': user?.profile?.maritalStatusText ?? '-',
  Pendidikan: user?.profile?.educationText ?? '-',
  'Pekerjaan/Profesi': user?.profile?.occupationName ?? '-',
  'Tinggal Dengan': user?.profile?.housemateText ?? '-',
  'Jumlah yang tinggal dirumah': `${user?.profile?.housematesNumber ?? '0'} orang`,
  'Kepemilikan Rumah': user?.profile?.houseOwnershipText ?? '-',
});

export const consultantProfile = (user?: IConsultant): InfoList => ({
  'Nomor Telepon': user?.username,
  'Tempat Lahir': user?.profile?.pob,
  'Tanggal Lahir': `${user?.profile?.dob} (${user?.profile?.age} tahun)`,
  Alamat: user?.profile?.address || '-',
  Domisili: user?.profile?.domicile,
});

export const pregnancyInfo = (pregnancy?: IPregnancy): InfoList => ({
  'Tinggi Badan': `${pregnancy?.heightBefore || '-'} cm`,
  'Berat Badan Sebelum Hamil': `${pregnancy?.weightBefore || '-'} kg`,
  'Berat Badan Setelah Melahirkan': `${pregnancy?.weightDuring || '-'} kg`,
  'Pernah Keguguran': pregnancy?.abortusExperienced ? 'Pernah' : 'Tidak Pernah',
  'Jumlah Keguguran': `${pregnancy?.abortusNum || '-'} kali`,
  'Kehamilan ke-': `${pregnancy?.pregnancyNum || '-'}`,
  'Penyakit/Keluhan Saat Hamil': pregnancy?.pregnancyComplaints,
});

export const babyInfo = (baby?: IBaby): InfoList => ({
  'Tanggal Lahir Bayi': `${baby?.dob ?? '-'}`,
  'Usia Kehamilan Saat Melahirkan': `${baby?.pregnancyWeeks ?? '0'} minggu`,
  'Berat Badan Bayi': `${baby?.weight ?? '0'} kg`,
  'Panjang/Tinggi Badan Bayi': `${baby?.height ?? '0'} cm`,
  'Diameter Lingkar Kepala Bayi': `${baby?.diameter ?? '0'} cm`,
  'Jenis Kelamin': baby?.gender === 'male' ? 'Laki-laki' : 'Perempuan',
  Asupan: `${baby?.feeds ?? '-'}`,
  'Inisiasi Menyusui Dini': baby?.imd ? 'Ya' : 'Tidak',
  'Waktu IMD': baby?.oneHourInit ? 'Lebih dari satu jam' : 'Kurang dari satu jam',
  'Cara Melahirkan': baby?.birthProccess ?? '-',
});

export const husbandInfo = (husband?: IHusband): InfoList => ({
  Relasi: husband?.relationTypeText,
  Nama: husband?.name,
  'Tempat Lahir': husband?.pob,
  'Tanggal Lahir': husband?.dob,
  Agama: husband?.religionText,
  Pendidikan: husband?.educationText,
  'Pekerjaan/Profesi': husband?.occupationName,
});
