
         $(function() {
            var bank = [
              {
                label: "SAL",
                ex: "ex: SAL"
              },
              {
                label: "HST",
                ex: "ex: HST"
              },
              {
                label: "INQ DPLK ",
                ex: "ex: INQ DPLK &lt;nomor rekening DPLK&gt;"
              },
              {
                label: "TAG BNI",
                ex: "ex: TAG BNI &lt;nomor kartu kredit&gt"
              },
              {
                label: "TAG HALO ",
                ex: "ex: TAG HALO &lt;nomor handphone&gt"
              },
              {
                label: "TAG INDOSAT",
                ex: "ex: TAG INDOSAT &lt;nomor handphone&gt"
              },
              {
                label: "TAG TELKOM ",
                ex: "ex: TAG TELKOM &lt;nomor handphone&gt"
              },
              {
                label: "TAG TRANSVISION ",
                ex: "ex: TAG TRANSVISION &lt;No. Pelanggan&gt;"
              },
              {
                label: "TAG XPLOR",
                ex: "ex: TAG XPLOR &lt;nomor handphone&gt"
              },
              {
                label: "TAG 3 ",
                ex: "ex: TAG 3 &lt;nomor handphone&gt"
              },
              {
                label: "TAG SMARTFREN ",
                ex: "ex: TAG SMARTFREN &lt;nomor handphone&gt"
              },
              {
                label: "TAG MNCVISION ",
                ex: "ex: TAG MNCVISION &lt;nomor pelanggan&gt"
              },
              {
                label: "TAG PLN ",
                ex: "ex: TAG PLN &lt;nomor handphone&gt"
              },
              {
                label: "TRANSFER ",
                ex: "ex: TRANSFER &lt;nomor rekening tujuan&gt &lt;nominal transfer&gt"
              },
              {
                label: "TRANSFER ANTARBANK ",
                ex: "ex: TRANSFER ANTARBANK &lt;nomor rekening tujuan&gt &lt;nominal transfer&gt #&lt;kode referensi&gt# &lt;nomor HP penerima &gt"
              },
              /*{
                label: "TRF NOTIFIKASI ",
                ex: "ex: TRF NOTIFIKASI &lt;nomor rekening tujuan&gt &lt;nominal transfer&gt &lt;nomor handphone penerima&gt"
              },*/
              {
                label: "TRANSFER BERITA",
                ex: "ex: TRANSFER BERITA &lt;nomor rekening tujuan&gt &lt;nominal transfer&gt #&lt;berita&gt#"
              },
              {
                label: "TRANSFER BERITANOTIFIKASI ",
                ex: "ex: TRANSFER BERITANOTIFIKASI &lt;nomor rekening tujuan&gt &lt;nominal transfer&gt #&lt;berita&gt# &lt;nomor handphone penerima&gt"
              },
              /*{
                label: "TUNAI",
                ex: "ex: TUNAI #&lt;nama penerima&gt# #&lt;alamat&gt# &lt;nomor handphone penerima&gt &lt;nominal&gt"
              },*/
              {
                label: "SETOR DPLK ",
                ex: "ex: SETOR DPLK &lt;nomor rekening DPLK&gt &lt;nominal transfer&gt"
              },
              {
                label: "TOP ",
                ex: "ex: TOP &lt;nomor handphone&gt &lt;nominal&gt"
              },
              /*{
                label: "TOP FLEXI ",
                ex: "ex: TOP FLEXI &lt;nomor handphone&gt &lt;nominal&gt"
              },*/	
              {
                label: "TOP XLData ",
                ex: "ex: TOP XLData &lt;nomor handphone&gt &lt;nominal&gt"
              },
              {
                label: "TOP 3",
                ex: "ex: TOP 3 &lt;nomor handphone&gt; &lt;nominal&gt;"
              },
              {
                label: "TOP FREN ",
                ex: "ex: TOP FREN &lt;nomor handphone&gt; &lt;nominal&gt;"
              },
              {
                label: "TOP PLN ",
                ex: "ex: TOP PLN &lt;no meter&gt;"
              },
              {
                label: "CEK PLN ",
                ex: "ex: CEK PLN &lt;no meter&gt; &lt;no no reff&gt;"
              },
              {
                label: "TOP TAPCASH ",
                ex: "ex: TOP TAPCASH &lt;nomor handphone&gt; &lt;nominal&gt;"
              },
              {
                label: "TOP LINK AJA ",
                ex: "ex: TOP LINK AJA &lt;nomor handphone&gt; &lt;nominal&gt;"
              },
              {
                label: "TOP GOPAY CUSTOMER ",
                ex: "ex: TOP GOPAY CUSTOMER &lt;nomor handphone&gt; &lt;nominal&gt;"
              },
              {
                label: "TOP GOJEK DRIVER ",
                ex: "ex: TOP GOJEK DRIVER &lt;nomor handphone&gt; &lt;nominal&gt;"
              },
              {
                label: "TOP GOPAY MERCHANT ",
                ex: "ex: TOP GOPAY MERCHANT &lt;nomor handphone&gt; &lt;nominal&gt;"
              },
			  /*{
                label: "TOP GRABPAY ",
                ex: "ex: TOP GRABPAY &lt;nomor handphone&gt; &lt;nominal&gt;"
              },*/
			  {
                label: "TOP UNIKQU ",
                ex: "ex: TOP UNIKQU &lt;No. Handphone&gt; &lt;nominal&gt;"
              },{
                label: "TOP ISAKU ",
                ex: "ex: TOP ISAKU &lt;No. Handphone&gt; &lt;nominal&gt;"
              },{
                label: "TOP XLHOTROD 600MB ",
                ex: "ex: TOP XLHOTROD 600MB &lt;No. Telepon&gt;"
              },{
                label: "TOP XLHOTROD 2GB ",
                ex: "ex: TOP XLHOTROD 2GB &lt;No. Telepon&gt;"
              },{
                label: "TOP XLHOTROD 6GB ",
                ex: "ex: TOP XLHOTROD 6GB &lt;No. Telepon&gt;"
              },{
                label: "TOP XLXMARTPLAN 1GB ",
                ex: "ex: TOP XLXMARTPLAN 1GB &lt;No. Telepon&gt;"
              },{
                 label: "TOP ORANGE ",
                 ex: "ex: TOP ORANGE &lt;Orange ID&gt; &lt;Nominal&gt;"
              },
              {
                label: "TOP PULSA INTERNET TELKOMSEL ",
                ex: "ex: TOP PULSA INTERNET TELKOMSEL &lt;No. Telepon&gt &lt;Nominal&gt;"
              },
              {
                label: "PAY PAM PALYJA ",
                ex: "ex: PAY PAM PALYJA &lt;No. Pelanggan&gt;"
              },
              {
                label: "PAY PAM AETRA ",
                ex: "ex: PAY PAM AETRA &lt;No. Pelanggan&gt;"
              },
              {
                label: "PAY PAM BANDUNG ",
                ex: "ex: PAY PAM BANDUNG &lt;No. Pelanggan&gt;"
              },
              {
                label: "PAY PAM Semarang ",
                ex: "ex: PAY PAM Semarang &lt;No. Pelanggan&gt;"
              },
              {
                label: "PAY PAM Manado ",
                ex: "ex: PAY PAM Manado &lt;No. Pelanggan&gt;"
              },
              {
                label: "PAY PAM Bogor ",
                ex: "ex: PAY PAM Bogor &lt;No. Pelanggan&gt;"
              },
              {
                label: "PAY PAM Surabaya ",
                ex: "ex: PAY PAM Surabaya &lt;No. Pelanggan&gt;"
              },
              {
                label: "PAY PAM Banjarmasin ",
                ex: "ex: PAY PAM Banjarmasin &lt;No. Pelanggan&gt;"
              },
              {
                label: "PAY PAM KabBogor ",
                ex: "ex: PAY PAM KabBogor &lt;No. Pelanggan&gt;"
              },
              {
                label: "PAY PAM Balikpapan ",
                ex: "ex: PAY PAM Balikpapan &lt;No. Pelanggan&gt;"
              },
              {
                label: "PAY PAM Solo ",
                ex: "ex: PAY PAM Solo &lt;No. Pelanggan&gt;"
              },
              {
                label: "PAY PAM Banyumas ",
                ex: "ex: PAY PAM Banyumas &lt;No. Pelanggan&gt;"
              },
              {
                label: "PAY PAM Cilacap ",
                ex: "ex: PAY PAM Cilacap &lt;No. Pelanggan&gt;"
              },
              {
                label: "PAY PAM Purworejo ",
                ex: "ex: PAY PAM Purworejo &lt;No. Pelanggan&gt;"
              },
              {
                label: "PAY PAM Depok ",
                ex: "ex: PAY PAM Depok &lt;No. Pelanggan&gt;"
              },
              {
                label: "PAY PAM BSD ",
                ex: "ex: PAY PAM BSD &lt;No. Pelanggan&gt;"
              },/*CR 19826 & 19827 */
              {
                label: "PAY PAM ATBBatam ",
                ex: "ex: PAY PAM ATBBatam &lt;No. Pelanggan&gt;"
              },
              {
                label: "PAY PAM ATSPalembang ",
                ex: "ex: PAY PAM ATSPalembang &lt;No. Pelanggan&gt;"
              },
              {
                label: "PAY PAM Balangan ",
                ex: "ex: PAY PAM Balangan &lt;No. Pelanggan&gt;"
              },
              {
                label: "PAY PAM BandarLampung ",
                ex: "ex: PAY PAM BandarLampung &lt;No. Pelanggan&gt;"
              },
              {
                label: "PAY PAM BangkaBarat ",
                ex: "ex: PAY PAM BangkaBarat &lt;No. Pelanggan&gt;"
              },
              {
                label: "PAY PAM Barabai ",
                ex: "ex: PAY PAM Barabai &lt;No. Pelanggan&gt;"
              },
              {
                label: "PAY PAM Berau ",
                ex: "ex: PAY PAM Berau &lt;No. Pelanggan&gt;"
              },
              {
                label: "PAY PAM Bojonegoro ",
                ex: "ex: PAY PAM Bojonegoro &lt;No. Pelanggan&gt;"
              },
              {
                label: "PAY PAM BukitTinggi ",
                ex: "ex: PAY PAM BukitTinggi &lt;No. Pelanggan&gt;"
              },
              {
                label: "PAY PAM Denpasar ",
                ex: "ex: PAY PAM Denpasar &lt;No. Pelanggan&gt;"
              },
              {
                label: "PAY PAM IntanBanjar ",
                ex: "ex: PAY PAM IntanBanjar &lt;No. Pelanggan&gt;"
              },
              {
                label: "PAY PAM Jayapura ",
                ex: "ex: PAY PAM Jayapura &lt;No. Pelanggan&gt;"
              },
              {
                label: "PAY PAM KabBandung ",
                ex: "ex: PAY PAM KabBandung &lt;No. Pelanggan&gt;"
              },
              {
                label: "PAY PAM KabSolok ",
                ex: "ex: PAY PAM KabSolok &lt;No. Pelanggan&gt;"
              },
              {
                label: "PAY PAM Klaten ",
                ex: "ex: PAY PAM Klaten &lt;No. Pelanggan&gt;"
              },
              {
                label: "PAY PAM Bekasi ",
                ex: "ex: PAY PAM Bekasi &lt;No. Pelanggan&gt;"
              },
              {
                label: "PAY PAM Malang ",
                ex: "ex: PAY PAM Malang &lt;No. Pelanggan&gt;"
              },
              {
                label: "PAY PAM Makassar ",
                ex: "ex: PAY PAM Makassar &lt;No. Pelanggan&gt;"
              },
              {
                label: "PAY PAM Mamuju ",
                ex: "ex: PAY PAM Mamuju &lt;No. Pelanggan&gt;"
              },
              {
                label: "PAY PAM Mataram ",
                ex: "ex: PAY PAM Mataram &lt;No. Pelanggan&gt;"
              },
              {
                label: "PAY PAM Padang ",
                ex: "ex: PAY PAM Padang &lt;No. Pelanggan&gt;"
              },
              {
                label: "PAY PAM PadangPanjang ",
                ex: "ex: PAY PAM PadangPanjang &lt;No. Pelanggan&gt;"
              },
              {
                label: "PAY PAM Palembang ",
                ex: "ex: PAY PAM Palembang &lt;No. Pelanggan&gt;"
              },
              {
                label: "PAY PAM Payakumbuh ",
                ex: "ex: PAY PAM Payakumbuh &lt;No. Pelanggan&gt;"
              },
              {
                label: "PAY PAM Polewali ",
                ex: "ex: PAY PAM Polewali &lt;No. Pelanggan&gt;"
              },
              {
                label: "PAY PAM Pontianak ",
                ex: "ex: PAY PAM Pontianak &lt;No. Pelanggan&gt;"
              },
              {
                label: "PAY PAM Probolinggo ",
                ex: "ex: PAY PAM Probolinggo &lt;No. Pelanggan&gt;"
              },
              {
                label: "PAY PAM Samarinda ",
                ex: "ex: PAY PAM Samarinda &lt;No. Pelanggan&gt;"
              },
              {
                label: "PAY PAM Sampit ",
                ex: "ex: PAY PAM Sampit &lt;No. Pelanggan&gt;"
              },
              {
                label: "PAY PAM Sidoarjo ",
                ex: "ex: PAY PAM Sidoarjo &lt;No. Pelanggan&gt;"
              },
              {
                label: "PAY PAM TanahDatar ",
                ex: "ex: PAY PAM TanahDatar &lt;No. Pelanggan&gt;"
              },
              {
                label: "PAY PAM Wonosobo ",
                ex: "ex: PAY PAM Wonosobo &lt;No. Pelanggan&gt;"
              },/* END CR 19826 & 19827 */
              //CR19971
              {
                label: "PAY PAM Cianjur ",
                ex: "ex: PAY PAM Cianjur &lt;No. Pelanggan&gt;"
              },
              {
                label: "PAY PAM KabIndramayu ",
                ex: "ex: PAY PAM KabIndramayu &lt;No. Pelanggan&gt;"
              },
              {
                label: "PAY PAM Tasikmalaya ",
                ex: "ex: PAY PAM Tasikmalaya &lt;No. Pelanggan&gt;"
              },
              {
                label: "PAY PAM Subang ",
                ex: "ex: PAY PAM Subang &lt;No. Pelanggan&gt;"
              },
              {
                label: "PAY PAM Sukabumi ",
                ex: "ex: PAY PAM Sukabumi &lt;No. Pelanggan&gt;"
              },
              {
                label: "PAY PAM Gresik ",
                ex: "ex: PAY PAM Gresik &lt;No. Pelanggan&gt;"
              },
              {
                label: "PAY PAM Pasuruan ",
                ex: "ex: PAY PAM Pasuruan &lt;No. Pelanggan&gt;"
              },
              {
                label: "PAY PAM KabSukabumi ",
                 ex: "ex: PAY PAM KabSukabumi &lt;No. Pelanggan&gt;"
              },
              //END CR19971
              //CR19972
              {
                label: "PAY PAM KabBoyolali ",
                ex: "ex: PAY PAM KabBoyolali &lt;No. Pelanggan&gt;"
              },
              {
                label: "PAY PAM KabMalang ",
                ex: "ex: PAY PAM KabMalang &lt;No. Pelanggan&gt;"
              },
              {
                label: "PAY PAM KabKaranganyar ",
                ex: "ex: PAY PAM KabKaranganyar &lt;No. Pelanggan&gt;"
              },
              {
                label: "PAY PAM KabKebumen ",
                ex: "ex: PAY PAM KabKebumen &lt;No. Pelanggan&gt;"
              },
              {
                label: "PAY PAM KabKudus ",
                ex: "ex: PAY PAM KabKudus &lt;No. Pelanggan&gt;"
              },
              {
                label: "PAY PAM KabPati ",
                ex: "ex: PAY PAM KabPati &lt;No. Pelanggan&gt;"
              },
              {
                label: "PAY PAM Magelang ",
                ex: "ex: PAY PAM Magelang &lt;No. Pelanggan&gt;"
              },
              {
                label: "PAY PAM KabSitubondo ",
                ex: "ex: PAY PAM KabSitubondo &lt;No. Pelanggan&gt;"
              },
              {
                label: "PAY PAM KabSukoharjo ",
                ex: "ex: PAY PAM KabSukoharjo &lt;No. Pelanggan&gt;"
              },
              {
                label: "PAY PAM Madiun ",
                ex: "ex: PAY PAM Madiun &lt;No. Pelanggan&gt;"
              },
              {
                label: "PAY PAM KabJepara ",
                ex: "ex: PAY PAM KabJepara &lt;No. Pelanggan&gt;"
              },
              {
                label: "PAY PAM KabBanyuwangi ",
                ex: "ex: PAY PAM KabBanyuwangi &lt;No. Pelanggan&gt;"
              },
              {
                label: "PAY PAM KabJember ",
                ex: "ex: PAY PAM KabJember &lt;No. Pelanggan&gt;"
              },
              {
                label: "PAY PAM KabJombang ",
                ex: "ex: PAY PAM KabJombang &lt;No. Pelanggan&gt;"
              },
              {
                label: "PAY PAM KabGarut ",
                ex: "ex: PAY PAM KabGarut &lt;No. Pelanggan&gt;"
              },
              {
                label: "PAY PAM Pekalongan ",
                ex: "ex: PAY PAM Pekalongan &lt;No. Pelanggan&gt;"
              },
              {
                label: "PAY PAM Ponorogo ",
                ex: "ex: PAY PAM Ponorogo &lt;No. Pelanggan&gt;"
              },
              //END CR19972
              //CR19973
              {
                label: "PAY PAM Tirtanadi ",
                ex: "ex: PAY PAM Tirtanadi &lt;No. Pelanggan&gt;"
              },
              {
                label: "PAY PAM Solok ",
                ex: "ex: PAY PAM Solok &lt;No. Pelanggan&gt;"
              },
              //END CR19973
              {
                label: "PAY NSC ",
                ex: "ex: PAY NSC &lt;No. Kontrak&gt;"
              },
              {
                label: "PAY BNIMF ",
                ex: "ex: PAY BNIMF &lt;No. Kontrak&gt;"
              },
              {
                label: "PAY ACC ",
                ex: "ex: PAY ACC &lt;No. Kontrak&gt;"
              },
              {
                label: "PAY OTO ",
                ex: "ex: PAY OTO &lt;No. Kontrak&gt;"
              },
              {
                label: "PAY ADIRA ",
                ex: "ex: PAY ADIRA &lt;No. Kontrak&gt;"
              },
              {
                label: "PAY FIF ",
                ex: "ex: PAY FIF &lt;No. Kontrak&gt;"
              },
              {
                label: "PAY KREDITPLUS ",
                ex: "ex: PAY KREDITPLUS &lt;No. Kontrak&gt;"
              },
              {
                label: "PAY SMS ",
                ex: "ex: PAY SMS &lt;No. Kontrak&gt;"
              },
              {//PEMBAYARAN
                label: "PAY JIWASRAYA ",
                ex: "PAY JIWASRAYA &lt;Kode Peserta&gt;"
              },{
                label: "PAY BPJSKES",
                ex: "PAY BPJSKES &lt;Kode Peserta&gt; &lt;Jumlah Bulan&gt;"
              },{
                label: "PAY BPJSTK BPU",
                ex: "PAY BPJSTK BPU &lt;NIK KTP&gt; &lt;Jumlah Bulan&gt;"
              },{
                label: "PAY BPJSTK PU",
                ex: "PAY BPJSTK PU &lt;Nomor Tagihan&gt; &lt;Jumlah Bulan&gt;"
              },{
                label: "PAY BPJSTK PMI",
                ex: "PAY BPJSTK PMI &lt;Kode Bayar&gt; &lt;Jumlah Bulan&gt;"
              },{
                label: "PAY BUMIPUTERA PERTAMA ",
                ex: "PAY BUMIPUTERA PERTAMA &lt;Nomor Nomor SPAJ/Polis&gt;"
              },{
                label: "PAY BUMIPUTERA LANJUTAN",
                ex: "PAY BUMIPUTERA LANJUTAN &lt;Nomor Nomor SPAJ/Polis&gt;"
              },{
                label: "PAY BUMIPUTERA TOPUP",
                ex: "PAY BUMIPUTERA TOPUP &lt;Nomor Nomor SPAJ/Polis&gt;"
              },{
                label: "PAY PRUDENTIAL AWAL",
                ex: "ex: PAY PRUDENTIAL AWAL &lt;Nomor SPAJ / Polis&gt; &lt;Nominal&gt;"
              },{
                label: "PAY PRUDENTIAL LANJUTAN",
                ex: "ex: PAY PRUDENTIAL LANJUTAN &lt;Nomor SPAJ / Polis&gt; &lt;Nominal&gt;"
              },{
                label: "PAY PRUDENTIAL TOPUP",
                ex: "ex: PAY PRUDENTIAL TOPUP &lt;Nomor SPAJ / Polis&gt; &lt;Nominal&gt;"
              },{
                label: "PAY KAI ",
                ex: "ex: PAY KAI &lt;Kode Bayar&gt;"
              },{
                label: "PAY RAILINK ",
                ex: "ex: PAY RAILINK &lt;Kode Bayar&gt;"
              },{
                label: "INQ DPLK ",
                ex: "ex: INQ DPLK &lt;No. Rekening&gt;"
              },{
                label: "PAY BNI ",
                ex: "ex: PAY BNI &lt;No. Kartu Kredit&gt; &lt;Nominal&gt;"
              },{
                label: "PAY ANZ ",
                ex: "ex: PAY ANZ &lt;No. Kartu Kredit&gt; &lt;Nominal&gt;"
              },{
                label: "PAY BRI ",
                ex: "ex: PAY BRI &lt;No. Kartu Kredit&gt; &lt;Nominal&gt;"
              },{
                label: "PAY BUKOPIN ",
                ex: "ex: PAY BUKOPIN &lt;No. Kartu Kredit&gt; &lt;Nominal&gt;"
              },{
                label: "PAY CITIBANK",
                ex: "ex: PAY CITIBANK &lt;No. Kartu Kredit&gt; &lt;Nominal&gt;"
              },{
                label: "PAY NIAGA ",
                ex: "ex: PAY NIAGA &lt;No. Kartu Kredit&gt; &lt;Nominal&gt;"
              },{
                label: "PAY DANAMON ",
                ex: "ex: PAY DANAMON &lt;No. Kartu Kredit&gt; &lt;Nominal&gt;"
              },{
                label: "PAY HSBC ",
                ex: "ex: PAY HSBC &lt;No. Kartu Kredit&gt; &lt;Nominal&gt;"
              },{
                label: "PAY MEGA ",
                ex: "ex: PAY MEGA &lt;No. Kartu Kredit&gt; &lt;Nominal&gt;"
              },{
                label: "PAY PERMATA ",
                ex: "ex: PAY PERMATA &lt;No. Kartu Kredit&gt; &lt;Nominal&gt;"
              },{
                label: "PAY SCB ",
                ex: "ex: PAY SCB &lt;No. Kartu Kredit&gt; &lt;Nominal&gt;"
              },{
                label: "PAY PANIN ",
                ex: "ex: PAY PANIN &lt;No. Kartu Kredit&gt; &lt;Nominal&gt;"
              },{
                label: "PAY PLN ",
                ex: "ex: PAY PLN &lt;Id Pelanggan&gt;"
              },{
                label: "PAY PLNNONTAGLIS ",
                ex: "ex: PAY PLNNONTAGLIS &lt;Id Pelanggan&gt;"
              },{
                label: "PAY PNBPAHU ",
                ex: "ex: PAY PNBPAHU &lt;No. Tagihan&gt;"
              },{
               label: "PAY PBB ",
               ex: "ex: PAY PBB &lt;No. Objek&gt; &lt;Tahun Pajak SPPT&gt;"
              },{
                label: "PAY PAJAKDAERAH JAKARTA ",
                ex: "ex: PAY PAJAKDAERAH JAKARTA &lt;No. Objek&gt;"
	      },{
                label: "PAY PAJAKDAERAH KOTAWARINGIN ",
                ex: "ex: PAY PAJAKDAERAH KOTAWARINGIN &lt;Kode Bayar&gt;"
              },{
                 label: "PAY PAJAKDAERAH BANYUASIN ",
                 ex: "ex: PAY PAJAKDAERAH BANYUASIN &lt;Kode Bayar&gt;"
              },{
                label: "PAY KTA CITIBANK ",
                ex: "ex: PAY KTA CITIBANK &lt;No. Rek&gt; &lt;Nominal&gt;"
              },{
                label: "PAY KTA ANZ ",
                ex: "ex: PAY KTA ANZ &lt;No. Rek&gt; &lt;Nominal&gt;"
              },{
                label: "PAY KTA SCB ",
                ex: "ex: PAY KTA SCB &lt;No. Rek&gt; &lt;Nominal&gt;"
              },{
                label: "PAY KTA HSBC ",
                ex: "ex: PAY KTA HSBC &lt;No. Rek&gt; &lt;Nominal&gt;"
              },{
                label: "PAY SAMSAT 1501 ",
                ex: "ex: PAY SAMSAT 1501 &lt;Kode Bayar&gt;"
              },{
                label: "PAY UTBK ",
                ex: "ex: PAY UTBK &lt;Kode Bayar&gt; &lt;NISN&gt;"
              },{
                label: "PAY HALO ",
                ex: "ex: PAY HALO &lt;No. Telepon&gt;"
              },{
                label: "PAY INDOSAT ",
                ex: "ex: PAY INDOSAT &lt;No. Telepon&gt;"
              },{
                label: "PAY TELKOM ",
                ex: "ex: PAY TELKOM &lt;No. Telepon&gt;"
              },{
                label: "PAY XPLOR ",
                ex: "ex: PAY XPLOR &lt;No. Telepon&gt;"
              },{
                label: "PAY 3 ",
                ex: "ex: PAY 3 &lt;No. Telepon&gt;"
              },{
                label: "PAY SMARTFREN ",
                ex: "ex: PAY SMARTFREN &lt;No. Telepon&gt;"
              },{
                label: "PAY GARUDA ",
                ex: "ex: PAY GARUDA &lt;Kode Bayar&gt;"
              },{
                label: "PAY LION ",
                ex: "ex: PAY LION &lt;Kode Bayar&gt;"
              },{
                label: "PAY CITILINK ",
                ex: "ex: PAY CITILINK &lt;Kode Bayar&gt;"
              },{
                label: "PAY MNCVISION ",
                ex: "ex: PAY MNCVISION &lt;No. Pelanggan&gt;"
              },{
                label: "PAY TELKOM ",
                ex: "ex: PAY TELKOM &lt;No. Pelanggan&gt;"
              },{
                label: "PAY TRANSVISION ",
                ex: "ex: PAY TRANSVISION &lt;No. Pelanggan&gt;"
              },{
                label: "PAY FIRSTMEDIA ",
                ex: "ex: PAY FIRSTMEDIA &lt;No. Pelanggan&gt;"
              },{
                label: "PAY UMPTKIN ",
                ex: "ex: PAY UMPTKIN &lt;No. SIP&gt;"
              },{
                label: "PAY TKI ",
                ex: "ex: PAY TKI &lt;Kode Bayar&gt;"
              },{
                label: "PAY LPG3KG ",
                ex: "ex: PAY LPG3KG &lt;ID Pangkalan&gt; &lt;ID Agent&gt; &lt;Jumlah Pembelian&gt; &lt;Tanggal Pengiriman (ddmmyyyy)&gt;"
              },{
              label : "PAY PELINDO 2 ",
              ex : "ex: PAY PELINDO 2 &lt;No. Pelanggan&gt;"
              },
	      {/*CR19076 & 19077*/
                label: "PAY PGN ",
                ex: "ex: PAY PGN &lt;No. Pelanggan&gt;"
              },/*END CR19076 & 19077*/
	      {
                label: "ZAKAT PPSDMS ",
                ex: "ex: ZAKAT PPSDMS &lt;Jumlah&gt;"
              },{
                label: "ZAKAT RZ ",
                ex: "ex: ZAKAT RZ &lt;NoHandphone&gt; &lt;Jumlah&gt;"
              },{
                label: "ZAKAT DPUDT ",
                ex: "ex: ZAKAT DPUDT &lt;Jumlah&gt;"
              },{
                label: "ZAKAT PKPU ",
                ex: "ex: ZAKAT PKPU &lt;Jumlah&gt;"
              },{
                label: "ZAKAT BAZNAS ",
                ex: "ex: ZAKAT BAZNAS &lt;Jumlah&gt;"
              },{
                label: "ZAKAT DD ",
                ex: "ex: ZAKAT DD &lt;Jumlah&gt;"
              },{
                label: "ZAKAT BAMUIS ",
                ex: "ex: ZAKAT BAMUIS &lt;Jumlah&gt;"
              },{
                label: "ZAKAT ACT ",
                ex: "ex: ZAKAT ACT &lt;Jumlah&gt;"
              },{
                label: "INFAQ BAMUIS ",
                ex: "ex: INFAQ BAMUIS &lt;Jumlah&gt;"
              },{
                label: "INFAQ PPSDMS ",
                ex: "ex: INFAQ PPSDMS &lt;Jumlah&gt;"
              },{
                label: "INFAQ RZ ",
                ex: "ex: INFAQ RZ &lt;NoHandphone&gt; &lt;Jumlah&gt;"
              },{
                label: "INFAQ DPUDT ",
                ex: "ex: INFAQ DPUDT &lt;Jumlah&gt;"
              },{
                label: "INFAQ PKPU ",
                ex: "ex: INFAQ PKPU &lt;Jumlah&gt;"
              },{
                label: "INFAQ BAZNAZ ",
                ex: "ex: INFAQ BAZNAZ &lt;Jumlah&gt;"
              },{
                label: "INFAQ DD ",
                ex: "ex: INFAQ DD &lt;Jumlah&gt;"
              },{
                label: "INFAQ ACT ",
                ex: "ex: INFAQ ACT &lt;Jumlah&gt;"
              },{
                label: "QURBAN DD ",
                ex: "ex: QURBAN DD &lt;Jumlah&gt;"
              },{
                label: "QURBAN BAZNAS ",
                ex: "ex: QURBAN BAZNAS &lt;Jumlah&gt;"
              },{
                label: "QURBAN DPUDT ",
                ex: "ex: QURBAN DPUDT &lt;Jumlah&gt;"
              },{
                label: "QURBAN PKPU ",
                ex: "ex: QURBAN PKPU &lt;Jumlah&gt;"
              },{
                label: "QURBAN RZ ",
                ex: "ex: QURBAN RZ &lt;NoHandphone&gt; &lt;Jumlah&gt;"
              },{
                label: "QURBAN ACT ",
                ex: "ex: QURBAN ACT &lt;Jumlah&gt;"
              },{
                label: "WAKAFTUNAI DD ",
                ex: "ex: WAKAFTUNAI DD &lt;Jumlah&gt;"
              },{
                label: "WAKAFTUNAI ACT ",
                ex: "ex: WAKAFTUNAI ACT &lt;Jumlah&gt;"
              },{
                label: "WAKAFPRODUKTIF ACT ",
                ex: "ex: WAKAFPRODUKTIF ACT &lt;Jumlah&gt;"
              },{
                label: "REQ VCN ",
                ex: "ex: REQ VCN &lt;Nominal&gt;"
              },{
                label: "DAFTAR REKENING",
                ex: "ex: DAFTAR REKENING"
              },{
                label: "GANTI REKENING ",
                ex: "ex: GANTI REKENING &lt;No Rekening&gt;"
              },{
                label: "PIN ",
                ex: "ex: PIN &lt;Pin Lama&gt; &lt;Pin Baru&gt;"
              },{
				label: "TOP INDOSATFREEDOM M ",
				ex : "ex : TOP INDOSATFREEDOM M &lt;Nomor Telepon&gt;"
			  },{
				label: "TOP INDOSATFREEDOM L ",
				ex : "ex : TOP INDOSATFREEDOM L &lt;Nomor Telepon&gt;"
			  },{
				label: "TOP INDOSATFREEDOM XL ",
				ex : "ex : TOP INDOSATFREEDOM XL &lt;Nomor Telepon&gt;"
			  },{
				label: "TOP INDOSATFREEDOM XXL ",
				ex : "ex : TOP INDOSATFREEDOM XXL &lt;Nomor Telepon&gt;"
			  },{
				label: "TOP INDOSATADDON 1GB ",
				ex : "ex : TOP INDOSATADDON 1GB &lt;Nomor Telepon&gt;"
			  },{
				label: "TOP INDOSATADDON 2GB ",
				ex : "ex : TOP INDOSATADDON 2GB &lt;Nomor Telepon&gt;"
			  },{
				label: "TOP INDOSATADDON 3GB ",
				ex : "ex : TOP INDOSATADDON 3GB &lt;Nomor Telepon&gt;"
			  },{
				label: "TOP INDOSATADDON 5GB ",
				ex : "ex : TOP INDOSATADDON 5GB &lt;Nomor Telepon&gt;"
			  },{
				label: "TOP EXTRA 2GB ",
				ex : "ex : TOP EXTRA 2GB &lt;Nomor Telepon&gt;"
			  },{
				label: "TOP EXTRA 4GB ",
				ex : "ex : TOP EXTRA 4GB &lt;Nomor Telepon&gt;"
			  },{
				label: "TOP EXTRA 6GB ",
				ex : "ex : TOP EXTRA 6GB &lt;Nomor Telepon&gt;"
			  },{
			    label: "TOP Telkomsel Musik 25K",
			    ex : "ex : TOP Telkomsel Musik 25K &lt;Nomor Telepon&gt;"
			  },{
			   label: "TOP Gamemax 25K",
               ex : "ex : TOP Gamemax 25K &lt;Nomor Telepon&gt;"
			  },{
			   label: "TOP Dunia Games 20K",
               ex : "ex : TOP Dunia Games 20K &lt;Nomor Telepon&gt;"
			  },{
			  label: "TOP Dunia Games 75K",
              ex : "ex : TOP Dunia Games 75K &lt;Nomor Telepon&gt;"
			  },{
			  label: "TOP Dunia Games 100K",
              ex : "ex : TOP Dunia Games 100K &lt;Nomor Telepon&gt;"
			  },{
			  label: "TOP Dunia Games 500K",
              ex : "ex : TOP Dunia Games 500K &lt;Nomor Telepon&gt;"
			  },{
			  label: "TOP Paket Voice 25K",
              ex : "ex : TOP Paket Voice 25K &lt;Nomor Telepon&gt;"
			  },{
			  label: "TOP Internet Combo 100K",
              ex : "ex : TOP Internet Combo 100K &lt;Nomor Telepon&gt;"
			  },{
			  label: "TOP Maxstream 100K",
              ex : "ex : TOP Maxstream 100K &lt;Nomor Telepon&gt;"
			  },{
              label: "TOP Maxstream 150K",
              ex : "ex : TOP Maxstream 150K &lt;Nomor Telepon&gt;"
			  }

    ];
    $( "#text1" ).autocomplete({
        position: { my: "left bottom", at: "left top", collision: "flip" },
        source: function( request, response ) {
                    var matcher = new RegExp( "^" + $.ui.autocomplete.escapeRegex( request.term ), "i" );
                     response( $.grep( bank, function( item ){
                         return matcher.test( item.label );
                     }) );
                }, minLength: 1,
        select: function( event, ui ) {
            $( "#text1" ).val( ui.item.label );
            $( "#ex" ).html( ui.item.ex );

            return false;
        }
    })
    // .autocomplete( "instance" )._renderItem = function( ul, item ) {
    //       return $( "<li>" )
    //         .append( "<div>" + item.label + "<br>" + item.ex + "</div>" )
    //         .appendTo( ul );
    // };
 });

function clearEx() {
    if ($('#text1').val() == '')
    $('#ex').html('');
}
