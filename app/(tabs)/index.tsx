import {
  Activity,
  Bell,
  BookOpen,
  ChevronRight,
  Footprints,
  Home,
  Info,
  Menu,
  MessageCircle,
  Plus,
  Scale,
  User,
  Utensils
} from "lucide-react-native";
import React, { useState } from "react";
import {
  Dimensions,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";

const { width } = Dimensions.get("window");

export default function App() {
  const [screen, setScreen] = useState("home");

  const renderHeader = (title, showBack = false) => (
    <View style={styles.header}>
      <TouchableOpacity>
        {showBack ? (
          <ChevronRight
            size={28}
            color="#000"
            style={{ transform: [{ rotate: "180deg" }] }}
          />
        ) : (
          <Menu size={28} color="#d33131" />
        )}
      </TouchableOpacity>
      <Text
        style={[
          styles.headerTitle,
          !showBack && { color: "#d33131", textTransform: "uppercase" },
        ]}
      >
        {title}
      </Text>
      <TouchableOpacity>
        <Bell size={24} color="#d33131" />
      </TouchableOpacity>
    </View>
  );

  const renderHome = () => (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* Welcome Card */}
      <View style={styles.welcomeCard}>
        <View style={styles.avatarContainer}>
          <Image
            source={{
              uri: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=400",
            }}
            style={styles.avatar}
          />
        </View>
        <View>
          <Text style={styles.welcomeText}>Hoş Geldiniz,</Text>
          <Text style={styles.subWelcomeText}>
            Sağlıklı bir yaşam için ilk adım.
          </Text>
        </View>
      </View>

      {/* Stats Row */}
      <View style={styles.statsRow}>
        <View style={styles.statCard}>
          <View style={styles.statHeader}>
            <Footprints size={20} color="#d33131" />
            <Text style={styles.statLabel}>Adımsayar</Text>
          </View>
          <Text style={styles.statValue}>8.450</Text>
          <Text style={styles.statTrend}>↑ %15 artış</Text>
        </View>
        <View style={styles.statCard}>
          <View style={styles.statHeader}>
            <Scale size={20} color="#d33131" />
            <Text style={styles.statLabel}>BKI Skoru</Text>
          </View>
          <Text style={styles.statValue}>24.2</Text>
          <Text style={styles.statStatus}>Normal Kilolu</Text>
        </View>
      </View>

      {/* Menu Grid */}
      <Text style={styles.sectionTitle}>Uygulama Menüsü</Text>
      <View style={styles.menuGrid}>
        {[
          { label: "Profil", icon: User },
          { label: "Bilgi", icon: Info },
          { label: "BKI", icon: Scale },
          { label: "Besin", icon: Utensils },
          { label: "Testler", icon: BookOpen },
          { label: "İletişim", icon: MessageCircle },
        ].map((item, index) => (
          <TouchableOpacity key={index} style={styles.menuItem}>
            <View style={styles.menuIconContainer}>
              <item.icon size={28} color="#d33131" />
            </View>
            <Text style={styles.menuLabel}>{item.label}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      {renderHeader(screen === "home" ? "PREDIABET" : "Detay")}
      {renderHome()}

      {/* Bottom Nav */}
      <View style={styles.bottomNav}>
        <TouchableOpacity
          onPress={() => setScreen("home")}
          style={styles.navTab}
        >
          <Home size={24} color={screen === "home" ? "#d33131" : "#94a3b8"} />
          <Text
            style={[styles.navText, screen === "home" && styles.activeNavText]}
          >
            Ana Sayfa
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navTab}>
          <Utensils size={24} color="#94a3b8" />
          <Text style={styles.navText}>Besinler</Text>
        </TouchableOpacity>
        <View style={styles.fabContainer}>
          <TouchableOpacity style={styles.fab}>
            <Plus size={32} color="#fff" />
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.navTab}>
          <Activity size={24} color="#94a3b8" />
          <Text style={styles.navText}>Testler</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navTab}>
          <User size={24} color="#94a3b8" />
          <Text style={styles.navText}>Profil</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: "#f8f6f6" },
  container: { flex: 1, padding: 16 },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    borderBottomColor: "#f1f5f9",
  },
  headerTitle: { fontSize: 18, fontWeight: "bold" },
  welcomeCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 20,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 2,
  },
  avatarContainer: {
    borderWidth: 2,
    borderColor: "#d33131",
    borderRadius: 40,
    padding: 2,
    marginRight: 16,
  },
  avatar: { width: 60, height: 60, borderRadius: 30 },
  welcomeText: { fontSize: 20, fontWeight: "bold" },
  subWelcomeText: { color: "#64748b", fontSize: 14 },
  statsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 24,
  },
  statCard: {
    backgroundColor: "#fff",
    width: (width - 48) / 2,
    padding: 16,
    borderRadius: 20,
    elevation: 2,
  },
  statHeader: { flexDirection: "row", alignItems: "center", marginBottom: 8 },
  statLabel: {
    marginLeft: 8,
    fontSize: 14,
    fontWeight: "500",
    color: "#64748b",
  },
  statValue: { fontSize: 24, fontWeight: "bold", marginBottom: 4 },
  statTrend: { color: "#10b981", fontSize: 12, fontWeight: "600" },
  statStatus: { color: "#d33131", fontSize: 12, fontWeight: "600" },
  sectionTitle: { fontSize: 18, fontWeight: "bold", marginBottom: 16 },
  menuGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  menuItem: {
    backgroundColor: "#fff",
    width: (width - 48) / 2,
    padding: 20,
    borderRadius: 20,
    alignItems: "center",
    marginBottom: 16,
    elevation: 1,
  },
  menuIconContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "rgba(211, 49, 49, 0.1)",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 12,
  },
  menuLabel: { fontWeight: "600", fontSize: 14 },
  bottomNav: {
    flexDirection: "row",
    backgroundColor: "#fff",
    paddingBottom: 20,
    paddingTop: 10,
    borderTopWidth: 1,
    borderTopColor: "#f1f5f9",
    justifyContent: "space-around",
    alignItems: "center",
  },
  navTab: { alignItems: "center" },
  navText: { fontSize: 10, color: "#94a3b8", marginTop: 4 },
  activeNavText: { color: "#d33131", fontWeight: "bold" },
  fabContainer: { top: -25 },
  fab: {
    width: 56,
    height: 56,
    backgroundColor: "#d33131",
    borderRadius: 28,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#d33131",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 4,
  },
});
